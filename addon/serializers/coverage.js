import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    type_: { embedded: 'always' },
    policyHolder: { embedded: 'always' },
    subscriber: { embedded: 'always' },
    beneficiary: { embedded: 'always' },
    relationship: { embedded: 'always' },
    period: { embedded: 'always' },
    payor: { embedded: 'always' },
    grouping: { embedded: 'always' },
    contract: { embedded: 'always' }
  }
});