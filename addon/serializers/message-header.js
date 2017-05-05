import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    event: { embedded: 'always' },
    destination: { embedded: 'always' },
    receiver: { embedded: 'always' },
    sender: { embedded: 'always' },
    enterer: { embedded: 'always' },
    author: { embedded: 'always' },
    source: { embedded: 'always' },
    responsible: { embedded: 'always' },
    reason: { embedded: 'always' },
    response: { embedded: 'always' },
    focus: { embedded: 'always' }
  }
});