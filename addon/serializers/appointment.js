import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    serviceCategory: { embedded: 'always' },
    serviceType: { embedded: 'always' },
    specialty: { embedded: 'always' },
    appointmentType: { embedded: 'always' },
    reason: { embedded: 'always' },
    indication: { embedded: 'always' },
    supportingInformation: { embedded: 'always' },
    slot: { embedded: 'always' },
    incomingReferral: { embedded: 'always' },
    participant: { embedded: 'always' },
    requestedPeriod: { embedded: 'always' }
  }
});