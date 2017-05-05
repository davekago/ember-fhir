import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    type_: { embedded: 'always' },
    subType: { embedded: 'always' },
    patient: { embedded: 'always' },
    billablePeriod: { embedded: 'always' },
    enterer: { embedded: 'always' },
    insurer: { embedded: 'always' },
    provider: { embedded: 'always' },
    organization: { embedded: 'always' },
    priority: { embedded: 'always' },
    fundsReserve: { embedded: 'always' },
    related: { embedded: 'always' },
    prescription: { embedded: 'always' },
    originalPrescription: { embedded: 'always' },
    payee: { embedded: 'always' },
    referral: { embedded: 'always' },
    facility: { embedded: 'always' },
    careTeam: { embedded: 'always' },
    information: { embedded: 'always' },
    diagnosis: { embedded: 'always' },
    procedure: { embedded: 'always' },
    insurance: { embedded: 'always' },
    accident: { embedded: 'always' },
    employmentImpacted: { embedded: 'always' },
    hospitalization: { embedded: 'always' },
    item: { embedded: 'always' },
    total: { embedded: 'always' }
  }
});