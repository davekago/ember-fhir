import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    statusHistory: { embedded: 'always' },
    type_: { embedded: 'always' },
    diagnosis: { embedded: 'always' },
    patient: { embedded: 'always' },
    managingOrganization: { embedded: 'always' },
    period: { embedded: 'always' },
    referralRequest: { embedded: 'always' },
    careManager: { embedded: 'always' },
    team: { embedded: 'always' },
    account: { embedded: 'always' }
  }
});