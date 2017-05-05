import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    masterIdentifier: { embedded: 'always' },
    identifier: { embedded: 'always' },
    type_: { embedded: 'always' },
    subject: { embedded: 'always' },
    author: { embedded: 'always' },
    recipient: { embedded: 'always' },
    content: { embedded: 'always' },
    related: { embedded: 'always' }
  }
});