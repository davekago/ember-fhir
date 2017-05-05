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
    code: { embedded: 'always' },
    timingTiming: { embedded: 'always' },
    timingPeriod: { embedded: 'always' },
    timingRange: { embedded: 'always' },
    location: { embedded: 'always' },
    participant: { embedded: 'always' },
    productReference: { embedded: 'always' },
    productCodeableConcept: { embedded: 'always' },
    quantity: { embedded: 'always' },
    dosage: { embedded: 'always' },
    bodySite: { embedded: 'always' },
    transform: { embedded: 'always' },
    dynamicValue: { embedded: 'always' }
  }
});