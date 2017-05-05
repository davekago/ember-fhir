import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    code: { embedded: 'always' },
    subject: { embedded: 'always' },
    context: { embedded: 'always' },
    effectivePeriod: { embedded: 'always' },
    assessor: { embedded: 'always' },
    previous: { embedded: 'always' },
    problem: { embedded: 'always' },
    investigation: { embedded: 'always' },
    finding: { embedded: 'always' },
    prognosisCodeableConcept: { embedded: 'always' },
    prognosisReference: { embedded: 'always' },
    action: { embedded: 'always' },
    note: { embedded: 'always' }
  }
});