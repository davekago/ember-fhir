import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    targetIdentifier: { embedded: 'always' },
    targetReference: { embedded: 'always' }
  }
});