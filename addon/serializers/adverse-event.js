import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    type_: { embedded: 'always' },
    subject: { embedded: 'always' },
    reaction: { embedded: 'always' },
    location: { embedded: 'always' },
    seriousness: { embedded: 'always' },
    outcome: { embedded: 'always' },
    recorder: { embedded: 'always' },
    eventParticipant: { embedded: 'always' },
    suspectEntity: { embedded: 'always' },
    subjectMedicalHistory: { embedded: 'always' },
    referenceDocument: { embedded: 'always' },
    study: { embedded: 'always' }
  }
});