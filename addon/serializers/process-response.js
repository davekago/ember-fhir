import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    organization: { embedded: 'always' },
    request: { embedded: 'always' },
    outcome: { embedded: 'always' },
    requestProvider: { embedded: 'always' },
    requestOrganization: { embedded: 'always' },
    form: { embedded: 'always' },
    processNote: { embedded: 'always' },
    error: { embedded: 'always' },
    communicationRequest: { embedded: 'always' }
  }
});