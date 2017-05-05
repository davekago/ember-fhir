import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    effectivePeriod: { embedded: 'always' },
    useContext: { embedded: 'always' },
    jurisdiction: { embedded: 'always' },
    topic: { embedded: 'always' },
    contributor: { embedded: 'always' },
    contact: { embedded: 'always' },
    relatedArtifact: { embedded: 'always' },
    library: { embedded: 'always' },
    scoring: { embedded: 'always' },
    compositeScoring: { embedded: 'always' },
    type_: { embedded: 'always' },
    group: { embedded: 'always' },
    supplementalData: { embedded: 'always' }
  }
});