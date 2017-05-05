import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    masterIdentifier: { embedded: 'always' },
    identifier: { embedded: 'always' },
    type_: { embedded: 'always' },
    class: { embedded: 'always' },
    subject: { embedded: 'always' },
    author: { embedded: 'always' },
    authenticator: { embedded: 'always' },
    custodian: { embedded: 'always' },
    relatesTo: { embedded: 'always' },
    securityLabel: { embedded: 'always' },
    content: { embedded: 'always' },
    context: { embedded: 'always' }
  }
});