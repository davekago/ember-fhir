import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    definition: { embedded: 'always' },
    notDoneReason: { embedded: 'always' },
    patient: { embedded: 'always' },
    relationship: { embedded: 'always' },
    bornPeriod: { embedded: 'always' },
    ageAge: { embedded: 'always' },
    ageRange: { embedded: 'always' },
    deceasedAge: { embedded: 'always' },
    deceasedRange: { embedded: 'always' },
    reasonCode: { embedded: 'always' },
    reasonReference: { embedded: 'always' },
    note: { embedded: 'always' },
    condition: { embedded: 'always' }
  }
});