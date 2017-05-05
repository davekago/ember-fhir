import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    code: { embedded: 'always' },
    patient: { embedded: 'always' },
    onsetAge: { embedded: 'always' },
    onsetPeriod: { embedded: 'always' },
    onsetRange: { embedded: 'always' },
    recorder: { embedded: 'always' },
    asserter: { embedded: 'always' },
    note: { embedded: 'always' },
    reaction: { embedded: 'always' }
  }
});