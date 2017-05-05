import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    vaccineCode: { embedded: 'always' },
    patient: { embedded: 'always' },
    encounter: { embedded: 'always' },
    reportOrigin: { embedded: 'always' },
    location: { embedded: 'always' },
    manufacturer: { embedded: 'always' },
    site: { embedded: 'always' },
    route: { embedded: 'always' },
    doseQuantity: { embedded: 'always' },
    practitioner: { embedded: 'always' },
    note: { embedded: 'always' },
    explanation: { embedded: 'always' },
    reaction: { embedded: 'always' },
    vaccinationProtocol: { embedded: 'always' }
  }
});