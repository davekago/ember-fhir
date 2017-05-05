import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    partOf: { embedded: 'always' },
    category: { embedded: 'always' },
    medicationCodeableConcept: { embedded: 'always' },
    medicationReference: { embedded: 'always' },
    subject: { embedded: 'always' },
    context: { embedded: 'always' },
    supportingInformation: { embedded: 'always' },
    performer: { embedded: 'always' },
    authorizingPrescription: { embedded: 'always' },
    type_: { embedded: 'always' },
    quantity: { embedded: 'always' },
    daysSupply: { embedded: 'always' },
    destination: { embedded: 'always' },
    receiver: { embedded: 'always' },
    note: { embedded: 'always' },
    dosageInstruction: { embedded: 'always' },
    substitution: { embedded: 'always' },
    detectedIssue: { embedded: 'always' },
    notDoneReasonCodeableConcept: { embedded: 'always' },
    notDoneReasonReference: { embedded: 'always' },
    eventHistory: { embedded: 'always' }
  }
});