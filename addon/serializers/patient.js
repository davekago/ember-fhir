import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    name: { embedded: 'always' },
    telecom: { embedded: 'always' },
    address: { embedded: 'always' },
    maritalStatus: { embedded: 'always' },
    photo: { embedded: 'always' },
    contact: { embedded: 'always' },
    animal: { embedded: 'always' },
    communication: { embedded: 'always' },
    generalPractitioner: { embedded: 'always' },
    managingOrganization: { embedded: 'always' },
    link: { embedded: 'always' }
  }
});