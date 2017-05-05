import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    basedOn: { embedded: 'always' },
    parent: { embedded: 'always' },
    questionnaire: { embedded: 'always' },
    subject: { embedded: 'always' },
    context: { embedded: 'always' },
    author: { embedded: 'always' },
    source: { embedded: 'always' },
    item: { embedded: 'always' }
  }
});