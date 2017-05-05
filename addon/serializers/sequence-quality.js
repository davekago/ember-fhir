import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    standardSequence: { embedded: 'always' },
    score: { embedded: 'always' },
    method: { embedded: 'always' }
  }
});