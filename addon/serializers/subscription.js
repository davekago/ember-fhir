import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    contact: { embedded: 'always' },
    channel: { embedded: 'always' },
    tag: { embedded: 'always' }
  }
});