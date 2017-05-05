import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    category: { embedded: 'always' },
    code: { embedded: 'always' },
    subject: { embedded: 'always' },
    period: { embedded: 'always' },
    encounter: { embedded: 'always' },
    author: { embedded: 'always' }
  }
});