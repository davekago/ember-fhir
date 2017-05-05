import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    basedOn: { embedded: 'always' },
    subtype: { embedded: 'always' },
    view: { embedded: 'always' },
    subject: { embedded: 'always' },
    context: { embedded: 'always' },
    occurrencePeriod: { embedded: 'always' },
    operator: { embedded: 'always' },
    reasonCode: { embedded: 'always' },
    bodySite: { embedded: 'always' },
    device: { embedded: 'always' },
    content: { embedded: 'always' },
    note: { embedded: 'always' }
  }
});