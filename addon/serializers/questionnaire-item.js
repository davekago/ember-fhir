import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    code: { embedded: 'always' },
    enableWhen: { embedded: 'always' },
    options: { embedded: 'always' },
    option: { embedded: 'always' },
    initialAttachment: { embedded: 'always' },
    initialCoding: { embedded: 'always' },
    initialQuantity: { embedded: 'always' },
    initialReference: { embedded: 'always' },
    item: { embedded: 'always' }
  }
});