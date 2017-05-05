import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    serviceCategory: { embedded: 'always' },
    serviceType: { embedded: 'always' },
    specialty: { embedded: 'always' },
    actor: { embedded: 'always' },
    planningHorizon: { embedded: 'always' }
  }
});