import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    patient: { embedded: 'always' },
    author: { embedded: 'always' },
    study: { embedded: 'always' }
  }
});