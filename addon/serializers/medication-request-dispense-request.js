import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    validityPeriod: { embedded: 'always' },
    quantity: { embedded: 'always' },
    expectedSupplyDuration: { embedded: 'always' },
    performer: { embedded: 'always' }
  }
});