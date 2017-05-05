import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    connectionType: { embedded: 'always' },
    managingOrganization: { embedded: 'always' },
    contact: { embedded: 'always' },
    period: { embedded: 'always' },
    payloadType: { embedded: 'always' }
  }
});