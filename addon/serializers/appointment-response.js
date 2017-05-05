import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    appointment: { embedded: 'always' },
    participantType: { embedded: 'always' },
    actor: { embedded: 'always' }
  }
});