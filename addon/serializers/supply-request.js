import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    category: { embedded: 'always' },
    orderedItem: { embedded: 'always' },
    occurrencePeriod: { embedded: 'always' },
    occurrenceTiming: { embedded: 'always' },
    requester: { embedded: 'always' },
    supplier: { embedded: 'always' },
    reasonCodeableConcept: { embedded: 'always' },
    reasonReference: { embedded: 'always' },
    deliverFrom: { embedded: 'always' },
    deliverTo: { embedded: 'always' }
  }
});