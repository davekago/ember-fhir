import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    statusHistory: { embedded: 'always' },
    class: { embedded: 'always' },
    classHistory: { embedded: 'always' },
    type_: { embedded: 'always' },
    priority: { embedded: 'always' },
    subject: { embedded: 'always' },
    episodeOfCare: { embedded: 'always' },
    incomingReferral: { embedded: 'always' },
    participant: { embedded: 'always' },
    appointment: { embedded: 'always' },
    period: { embedded: 'always' },
    length: { embedded: 'always' },
    reason: { embedded: 'always' },
    diagnosis: { embedded: 'always' },
    account: { embedded: 'always' },
    hospitalization: { embedded: 'always' },
    location: { embedded: 'always' },
    serviceProvider: { embedded: 'always' },
    partOf: { embedded: 'always' }
  }
});