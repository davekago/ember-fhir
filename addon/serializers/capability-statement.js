import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    contact: { embedded: 'always' },
    useContext: { embedded: 'always' },
    jurisdiction: { embedded: 'always' },
    software: { embedded: 'always' },
    implementation: { embedded: 'always' },
    profile: { embedded: 'always' },
    rest: { embedded: 'always' },
    messaging: { embedded: 'always' },
    document: { embedded: 'always' }
  }
});