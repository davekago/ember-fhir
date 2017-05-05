import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    contact: { embedded: 'always' },
    useContext: { embedded: 'always' },
    jurisdiction: { embedded: 'always' },
    base: { embedded: 'always' },
    parent: { embedded: 'always' },
    replaces: { embedded: 'always' },
    event: { embedded: 'always' },
    focus: { embedded: 'always' },
    allowedResponse: { embedded: 'always' }
  }
});