import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    category: { embedded: 'always' },
    code: { embedded: 'always' },
    instance: { embedded: 'always' },
    ingredient: { embedded: 'always' }
  }
});