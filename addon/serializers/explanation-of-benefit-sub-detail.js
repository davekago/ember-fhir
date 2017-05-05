import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    type_: { embedded: 'always' },
    revenue: { embedded: 'always' },
    category: { embedded: 'always' },
    service: { embedded: 'always' },
    modifier: { embedded: 'always' },
    programCode: { embedded: 'always' },
    quantity: { embedded: 'always' },
    unitPrice: { embedded: 'always' },
    net: { embedded: 'always' },
    udi: { embedded: 'always' },
    adjudication: { embedded: 'always' }
  }
});