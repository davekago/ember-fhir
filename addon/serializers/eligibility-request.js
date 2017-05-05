import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    priority: { embedded: 'always' },
    patient: { embedded: 'always' },
    servicedPeriod: { embedded: 'always' },
    enterer: { embedded: 'always' },
    provider: { embedded: 'always' },
    organization: { embedded: 'always' },
    insurer: { embedded: 'always' },
    facility: { embedded: 'always' },
    coverage: { embedded: 'always' },
    benefitCategory: { embedded: 'always' },
    benefitSubCategory: { embedded: 'always' }
  }
});