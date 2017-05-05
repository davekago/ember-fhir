import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    subject: { embedded: 'always' },
    whenUsed: { embedded: 'always' },
    timingTiming: { embedded: 'always' },
    timingPeriod: { embedded: 'always' },
    source: { embedded: 'always' },
    device: { embedded: 'always' },
    indication: { embedded: 'always' },
    bodySite: { embedded: 'always' },
    note: { embedded: 'always' }
  }
});