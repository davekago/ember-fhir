import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    site: { embedded: 'always' },
    route: { embedded: 'always' },
    method: { embedded: 'always' },
    dose: { embedded: 'always' },
    rateRatio: { embedded: 'always' },
    rateSimpleQuantity: { embedded: 'always' }
  }
});