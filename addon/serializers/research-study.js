import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    protocol: { embedded: 'always' },
    partOf: { embedded: 'always' },
    category: { embedded: 'always' },
    focus: { embedded: 'always' },
    contact: { embedded: 'always' },
    relatedArtifact: { embedded: 'always' },
    keyword: { embedded: 'always' },
    jurisdiction: { embedded: 'always' },
    enrollment: { embedded: 'always' },
    period: { embedded: 'always' },
    sponsor: { embedded: 'always' },
    principalInvestigator: { embedded: 'always' },
    site: { embedded: 'always' },
    reasonStopped: { embedded: 'always' },
    note: { embedded: 'always' },
    arm: { embedded: 'always' }
  }
});