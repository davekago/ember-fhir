import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    type_: { embedded: 'always' },
    telecom: { embedded: 'always' },
    address: { embedded: 'always' },
    partOf: { embedded: 'always' },
    contact: { embedded: 'always' },
    endpoint: { embedded: 'always' }
  }
});