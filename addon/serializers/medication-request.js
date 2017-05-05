import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    definition: { embedded: 'always' },
    basedOn: { embedded: 'always' },
    groupIdentifier: { embedded: 'always' },
    category: { embedded: 'always' },
    medicationCodeableConcept: { embedded: 'always' },
    medicationReference: { embedded: 'always' },
    subject: { embedded: 'always' },
    context: { embedded: 'always' },
    supportingInformation: { embedded: 'always' },
    requester: { embedded: 'always' },
    recorder: { embedded: 'always' },
    reasonCode: { embedded: 'always' },
    reasonReference: { embedded: 'always' },
    note: { embedded: 'always' },
    dosageInstruction: { embedded: 'always' },
    dispenseRequest: { embedded: 'always' },
    substitution: { embedded: 'always' },
    priorPrescription: { embedded: 'always' },
    detectedIssue: { embedded: 'always' },
    eventHistory: { embedded: 'always' }
  }
});