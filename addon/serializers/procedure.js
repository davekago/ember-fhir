import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    definition: { embedded: 'always' },
    basedOn: { embedded: 'always' },
    partOf: { embedded: 'always' },
    notDoneReason: { embedded: 'always' },
    category: { embedded: 'always' },
    code: { embedded: 'always' },
    subject: { embedded: 'always' },
    context: { embedded: 'always' },
    performedPeriod: { embedded: 'always' },
    performer: { embedded: 'always' },
    location: { embedded: 'always' },
    reasonCode: { embedded: 'always' },
    reasonReference: { embedded: 'always' },
    bodySite: { embedded: 'always' },
    outcome: { embedded: 'always' },
    report: { embedded: 'always' },
    complication: { embedded: 'always' },
    complicationDetail: { embedded: 'always' },
    followUp: { embedded: 'always' },
    note: { embedded: 'always' },
    focalDevice: { embedded: 'always' },
    usedReference: { embedded: 'always' },
    usedCode: { embedded: 'always' }
  }
});