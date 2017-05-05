import Ember from 'ember';
import DS from 'ember-data';

const {
  get,
  isEqual,
  isPresent,
  String: { camelize, capitalize, singularize }
} = Ember;

export default DS.RESTAdapter.extend({
  defaultSerializer: '-fhir',

  pathForType(type) {
    return capitalize(camelize(type));
  },

  createRecord(store, type, snapshot) {
    if (isPresent(get(snapshot, 'id'))) {
      return this.updateRecord(store, type, snapshot);
    }

    return this._super(store, type, snapshot);
  },

  buildURL(modelName, id, snapshot, requestType, query) {
    if (isEqual(requestType, 'fhirQuery')) {
      return this.buildFhirUrl(modelName, query);
    }

    return this._super(modelName, id, snapshot, requestType, query);
  },

  buildFhirUrl(modelName, query) {
    const queryString = Object.keys(query).map((key) => {
      return `${key}=${get(query, key)}`;
    }).join('&');

    return `/${singularize(this.pathForType(modelName))}?${queryString}`;
  }
});
