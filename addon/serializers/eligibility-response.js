import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    requestProvider: { embedded: 'always' },
    requestOrganization: { embedded: 'always' },
    request: { embedded: 'always' },
    outcome: { embedded: 'always' },
    insurer: { embedded: 'always' },
    insurance: { embedded: 'always' },
    form: { embedded: 'always' },
    error: { embedded: 'always' }
  }
});