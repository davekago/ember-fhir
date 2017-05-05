import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    schedule: { embedded: 'always' },
    quantity: { embedded: 'always' },
    rateSimpleQuantity: { embedded: 'always' },
    rateRatio: { embedded: 'always' }
  }
});