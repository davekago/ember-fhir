import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    accessionIdentifier: { embedded: 'always' },
    type_: { embedded: 'always' },
    subject: { embedded: 'always' },
    parent: { embedded: 'always' },
    request: { embedded: 'always' },
    collection: { embedded: 'always' },
    processing: { embedded: 'always' },
    container_: { embedded: 'always' },
    note: { embedded: 'always' }
  }
});