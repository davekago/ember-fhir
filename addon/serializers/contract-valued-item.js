import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    entityCodeableConcept: { embedded: 'always' },
    entityReference: { embedded: 'always' },
    identifier: { embedded: 'always' },
    quantity: { embedded: 'always' },
    unitPrice: { embedded: 'always' },
    net: { embedded: 'always' }
  }
});