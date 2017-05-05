import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    type_: { embedded: 'always' },
    subtype: { embedded: 'always' },
    purposeOfEvent: { embedded: 'always' },
    agent: { embedded: 'always' },
    source: { embedded: 'always' },
    entity: { embedded: 'always' }
  }
});