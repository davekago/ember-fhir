import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    basedOn: { embedded: 'always' },
    partOf: { embedded: 'always' },
    patient: { embedded: 'always' },
    type_: { embedded: 'always' },
    suppliedItem: { embedded: 'always' },
    occurrencePeriod: { embedded: 'always' },
    occurrenceTiming: { embedded: 'always' },
    supplier: { embedded: 'always' },
    destination: { embedded: 'always' },
    receiver: { embedded: 'always' }
  }
});