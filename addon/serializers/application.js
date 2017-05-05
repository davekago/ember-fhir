import Ember from 'ember';
import DS from 'ember-data';
import coerceId from "ember-data/-private/system/coerce-id";

const {
  A,
  get,
  guidFor,
  isEmpty,
  isNone,
  isPresent,
  merge,
  set,
  String: { camelize, capitalize },
  typeOf
} = Ember;

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,

  serialize(snapshot, options) {
    const hash = this._super(snapshot, options),
      resourceType = capitalize(camelize(get(snapshot, 'modelName')));

    set(hash, 'resourceType', resourceType);

    return hash;
  },

  serializeIntoHash(hash, typeClass, snapshot, options) {
    merge(hash, this.serialize(snapshot, options));
  },

  extractId(modelClass, resourceHash) {
    return get(resourceHash, 'id') ||
      guidFor(get(modelClass, 'modelName'));
  },

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // fix reserved names e.g data
    const reserved = [ 'data' ];
    reserved.forEach((r) => {
      if (payload.data.attributes[r]) {
        payload.data.attributes[`${r}_`] = payload.data.attributes[r];
        delete payload.data.attributes[r];
      }
    });

    let resourceArray = null,
      hash = {};

    if (isEmpty(get(payload, 'entry'))) {
      resourceArray = [ payload ];
    } else {
      resourceArray = get(payload, 'entry').mapBy('resource');
    }

    resourceArray.forEach((resource) => {
      const type = get(resource, 'resourceType').dasherize().pluralize();
      if (isEmpty(get(hash, 'type'))) {
        set(hash, 'type', A());
      }

      hash[type].push(resource);
    });

    return this._super(store, primaryModelClass, hash, id, requestType);
  },

  normalizeArray(store, modelName, arrayHash, prop) {
    const documentHash = {
      data: A()
    };

    arrayHash.map((hash) => {
      const resource = get(hash, 'resourceType'),
        modelClass = store.modelFor(resource),
        serializer = store.serializerFor(resource),
        normalizedSerializer = serializer.normalize(modelClass, hash, prop),
        data = get(normalizedSerializer, 'data');

      get(documentHash, 'data').push(data);
    });

    return documentHash;
  },

  extractRelationship(relationshipModelName, relationshipHash) {
    if (isNone(relationshipHash)) {
      return null;
    }

    if (typeOf(relationshipHash) === 'object') {
      const id = get(relationshipHash, 'id');
      if (isPresent(id)) {
        set(relationshipHash, 'id', coerceId(id));
      }
      return relationshipHash;
    }

    return {
      id: this.extractId(relationshipHash),
      type: relationshipModelName
    };
  }
});
