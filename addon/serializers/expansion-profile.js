import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    contact: { embedded: 'always' },
    useContext: { embedded: 'always' },
    jurisdiction: { embedded: 'always' },
    fixedVersion: { embedded: 'always' },
    excludedSystem: { embedded: 'always' },
    designation: { embedded: 'always' }
  }
});