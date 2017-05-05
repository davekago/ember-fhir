import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    testScript: { embedded: 'always' },
    participant: { embedded: 'always' },
    setup: { embedded: 'always' },
    test: { embedded: 'always' },
    teardown: { embedded: 'always' }
  }
});