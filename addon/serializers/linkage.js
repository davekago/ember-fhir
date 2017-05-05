import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {author: { embedded: 'always' }, item: { embedded: 'always' }
  }
});