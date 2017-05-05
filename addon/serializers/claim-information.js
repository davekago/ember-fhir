import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    category: { embedded: 'always' },
    code: { embedded: 'always' },
    timingPeriod: { embedded: 'always' },
    valueQuantity: { embedded: 'always' },
    valueAttachment: { embedded: 'always' },
    valueReference: { embedded: 'always' },
    reason: { embedded: 'always' }
  }
});