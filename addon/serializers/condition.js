import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    category: { embedded: 'always' },
    severity: { embedded: 'always' },
    code: { embedded: 'always' },
    bodySite: { embedded: 'always' },
    subject: { embedded: 'always' },
    context: { embedded: 'always' },
    onsetAge: { embedded: 'always' },
    onsetPeriod: { embedded: 'always' },
    onsetRange: { embedded: 'always' },
    abatementAge: { embedded: 'always' },
    abatementPeriod: { embedded: 'always' },
    abatementRange: { embedded: 'always' },
    asserter: { embedded: 'always' },
    stage: { embedded: 'always' },
    evidence: { embedded: 'always' },
    note: { embedded: 'always' }
  }
});