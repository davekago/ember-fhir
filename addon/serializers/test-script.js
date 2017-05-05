import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    contact: { embedded: 'always' },
    useContext: { embedded: 'always' },
    jurisdiction: { embedded: 'always' },
    origin: { embedded: 'always' },
    destination: { embedded: 'always' },
    metadata: { embedded: 'always' },
    fixture: { embedded: 'always' },
    profile: { embedded: 'always' },
    variable: { embedded: 'always' },
    rule: { embedded: 'always' },
    ruleset: { embedded: 'always' },
    setup: { embedded: 'always' },
    test: { embedded: 'always' },
    teardown: { embedded: 'always' }
  }
});