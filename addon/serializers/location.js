import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    operationalStatus: { embedded: 'always' },
    type_: { embedded: 'always' },
    telecom: { embedded: 'always' },
    address: { embedded: 'always' },
    physicalType: { embedded: 'always' },
    position: { embedded: 'always' },
    managingOrganization: { embedded: 'always' },
    partOf: { embedded: 'always' },
    endpoint: { embedded: 'always' }
  }
});