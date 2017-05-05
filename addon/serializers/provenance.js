import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    target: { embedded: 'always' },
    period: { embedded: 'always' },
    location: { embedded: 'always' },
    reason: { embedded: 'always' },
    activity: { embedded: 'always' },
    agent: { embedded: 'always' },
    entity: { embedded: 'always' },
    signature: { embedded: 'always' }
  }
});