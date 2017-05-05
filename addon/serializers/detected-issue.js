import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    category: { embedded: 'always' },
    patient: { embedded: 'always' },
    author: { embedded: 'always' },
    implicated: { embedded: 'always' },
    mitigation: { embedded: 'always' }
  }
});