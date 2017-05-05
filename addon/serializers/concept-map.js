import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    contact: { embedded: 'always' },
    useContext: { embedded: 'always' },
    jurisdiction: { embedded: 'always' },
    sourceReference: { embedded: 'always' },
    targetReference: { embedded: 'always' },
    group: { embedded: 'always' }
  }
});