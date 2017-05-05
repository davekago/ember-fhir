import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    revenue: { embedded: 'always' },
    category: { embedded: 'always' },
    service: { embedded: 'always' },
    modifier: { embedded: 'always' },
    programCode: { embedded: 'always' },
    servicedPeriod: { embedded: 'always' },
    locationCodeableConcept: { embedded: 'always' },
    locationAddress: { embedded: 'always' },
    locationReference: { embedded: 'always' },
    quantity: { embedded: 'always' },
    unitPrice: { embedded: 'always' },
    net: { embedded: 'always' },
    udi: { embedded: 'always' },
    bodySite: { embedded: 'always' },
    subSite: { embedded: 'always' },
    encounter: { embedded: 'always' },
    adjudication: { embedded: 'always' },
    detail: { embedded: 'always' }
  }
});