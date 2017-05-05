import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    type_: { embedded: 'always' },
    effectivePeriod: { embedded: 'always' },
    useContext: { embedded: 'always' },
    jurisdiction: { embedded: 'always' },
    topic: { embedded: 'always' },
    contributor: { embedded: 'always' },
    contact: { embedded: 'always' },
    relatedArtifact: { embedded: 'always' },
    parameter: { embedded: 'always' },
    dataRequirement: { embedded: 'always' },
    content: { embedded: 'always' }
  }
});