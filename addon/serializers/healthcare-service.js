import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    providedBy: { embedded: 'always' },
    category: { embedded: 'always' },
    type_: { embedded: 'always' },
    specialty: { embedded: 'always' },
    location: { embedded: 'always' },
    photo: { embedded: 'always' },
    telecom: { embedded: 'always' },
    coverageArea: { embedded: 'always' },
    serviceProvisionCode: { embedded: 'always' },
    eligibility: { embedded: 'always' },
    characteristic: { embedded: 'always' },
    referralMethod: { embedded: 'always' },
    availableTime: { embedded: 'always' },
    notAvailable: { embedded: 'always' },
    endpoint: { embedded: 'always' }
  }
});