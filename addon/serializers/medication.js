import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    code: { embedded: 'always' },
    manufacturer: { embedded: 'always' },
    form: { embedded: 'always' },
    ingredient: { embedded: 'always' },
    package: { embedded: 'always' },
    image: { embedded: 'always' }
  }
});