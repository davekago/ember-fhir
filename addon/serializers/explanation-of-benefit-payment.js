import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    type_: { embedded: 'always' },
    adjustment: { embedded: 'always' },
    adjustmentReason: { embedded: 'always' },
    amount: { embedded: 'always' },
    identifier: { embedded: 'always' }
  }
});