import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    code: { embedded: 'always' },
    qualifier: { embedded: 'always' },
    image: { embedded: 'always' },
    patient: { embedded: 'always' }
  }
});