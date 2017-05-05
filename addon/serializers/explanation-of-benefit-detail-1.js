import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    revenue: { embedded: 'always' },
    category: { embedded: 'always' },
    service: { embedded: 'always' },
    modifier: { embedded: 'always' },
    fee: { embedded: 'always' },
    adjudication: { embedded: 'always' }
  }
});