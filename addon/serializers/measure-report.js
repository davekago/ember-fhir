import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    measure: { embedded: 'always' },
    patient: { embedded: 'always' },
    reportingOrganization: { embedded: 'always' },
    period: { embedded: 'always' },
    group: { embedded: 'always' },
    evaluatedResources: { embedded: 'always' }
  }
});