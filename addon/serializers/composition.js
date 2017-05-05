import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    type_: { embedded: 'always' },
    class: { embedded: 'always' },
    subject: { embedded: 'always' },
    encounter: { embedded: 'always' },
    author: { embedded: 'always' },
    attester: { embedded: 'always' },
    custodian: { embedded: 'always' },
    relatesTo: { embedded: 'always' },
    event: { embedded: 'always' },
    section: { embedded: 'always' }
  }
});