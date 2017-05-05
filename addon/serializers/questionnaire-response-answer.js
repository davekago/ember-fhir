import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    valueAttachment: { embedded: 'always' },
    valueCoding: { embedded: 'always' },
    valueQuantity: { embedded: 'always' },
    valueReference: { embedded: 'always' },
    item: { embedded: 'always' }
  }
});