import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    patient: { embedded: 'always' },
    specimen: { embedded: 'always' },
    device: { embedded: 'always' },
    performer: { embedded: 'always' },
    quantity: { embedded: 'always' },
    referenceSeq: { embedded: 'always' },
    variant: { embedded: 'always' },
    quality: { embedded: 'always' },
    repository: { embedded: 'always' },
    pointer: { embedded: 'always' }
  }
});