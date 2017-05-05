import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    collector: { embedded: 'always' },
    collectedPeriod: { embedded: 'always' },
    quantity: { embedded: 'always' },
    method: { embedded: 'always' },
    bodySite: { embedded: 'always' }
  }
});