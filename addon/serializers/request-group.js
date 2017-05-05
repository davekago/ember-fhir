import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    definition: { embedded: 'always' },
    basedOn: { embedded: 'always' },
    replaces: { embedded: 'always' },
    groupIdentifier: { embedded: 'always' },
    subject: { embedded: 'always' },
    context: { embedded: 'always' },
    author: { embedded: 'always' },
    reasonCodeableConcept: { embedded: 'always' },
    reasonReference: { embedded: 'always' },
    note: { embedded: 'always' },
    action: { embedded: 'always' }
  }
});