import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    contact: { embedded: 'always' },
    useContext: { embedded: 'always' },
    jurisdiction: { embedded: 'always' },
    keyword: { embedded: 'always' },
    mapping: { embedded: 'always' },
    snapshot: { embedded: 'always' },
    differential: { embedded: 'always' }
  }
});