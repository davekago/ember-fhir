import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    target: { embedded: 'always' },
    provider: { embedded: 'always' },
    organization: { embedded: 'always' },
    request: { embedded: 'always' },
    response: { embedded: 'always' },
    item: { embedded: 'always' },
    period: { embedded: 'always' }
  }
});