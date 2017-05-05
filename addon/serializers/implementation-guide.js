import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    contact: { embedded: 'always' },
    useContext: { embedded: 'always' },
    jurisdiction: { embedded: 'always' },
    dependency: { embedded: 'always' },
    package: { embedded: 'always' },
    global: { embedded: 'always' },
    page: { embedded: 'always' }
  }
});