import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    period: { embedded: 'always' },
    practitioner: { embedded: 'always' },
    organization: { embedded: 'always' },
    code: { embedded: 'always' },
    specialty: { embedded: 'always' },
    location: { embedded: 'always' },
    healthcareService: { embedded: 'always' },
    telecom: { embedded: 'always' },
    availableTime: { embedded: 'always' },
    notAvailable: { embedded: 'always' },
    endpoint: { embedded: 'always' }
  }
});