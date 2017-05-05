import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    definition: { embedded: 'always' },
    basedOn: { embedded: 'always' },
    partOf: { embedded: 'always' },
    notDoneReason: { embedded: 'always' },
    category: { embedded: 'always' },
    medium: { embedded: 'always' },
    subject: { embedded: 'always' },
    recipient: { embedded: 'always' },
    topic: { embedded: 'always' },
    context: { embedded: 'always' },
    sender: { embedded: 'always' },
    reasonCode: { embedded: 'always' },
    reasonReference: { embedded: 'always' },
    payload: { embedded: 'always' },
    note: { embedded: 'always' }
  }
});