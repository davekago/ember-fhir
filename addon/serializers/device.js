import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    udi: { embedded: 'always' },
    type_: { embedded: 'always' },
    patient: { embedded: 'always' },
    owner: { embedded: 'always' },
    contact: { embedded: 'always' },
    location: { embedded: 'always' },
    note: { embedded: 'always' },
    safety: { embedded: 'always' }
  }
});