import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    code: { embedded: 'always' },
    characteristic: { embedded: 'always' },
    member: { embedded: 'always' }
  }
});