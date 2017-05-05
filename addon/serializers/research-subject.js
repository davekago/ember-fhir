import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    period: { embedded: 'always' },
    study: { embedded: 'always' },
    individual: { embedded: 'always' },
    consent: { embedded: 'always' }
  }
});