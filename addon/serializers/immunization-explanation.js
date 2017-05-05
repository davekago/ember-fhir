import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {reason: { embedded: 'always' }, reasonNotGiven: { embedded: 'always' }
  }
});