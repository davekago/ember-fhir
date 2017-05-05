import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    period: { embedded: 'always' },
    organization: { embedded: 'always' },
    request: { embedded: 'always' },
    outcome: { embedded: 'always' },
    requestProvider: { embedded: 'always' },
    requestOrganization: { embedded: 'always' },
    detail: { embedded: 'always' },
    form: { embedded: 'always' },
    total: { embedded: 'always' },
    processNote: { embedded: 'always' }
  }
});