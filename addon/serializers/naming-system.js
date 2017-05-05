import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    contact: { embedded: 'always' },
    type_: { embedded: 'always' },
    useContext: { embedded: 'always' },
    jurisdiction: { embedded: 'always' },
    uniqueId: { embedded: 'always' },
    replacedBy: { embedded: 'always' }
  }
});