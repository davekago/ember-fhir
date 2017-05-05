import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    code: { embedded: 'always' },
    documentation: { embedded: 'always' },
    condition: { embedded: 'always' },
    relatedAction: { embedded: 'always' },
    timingPeriod: { embedded: 'always' },
    timingDuration: { embedded: 'always' },
    timingRange: { embedded: 'always' },
    timingTiming: { embedded: 'always' },
    participant: { embedded: 'always' },
    type_: { embedded: 'always' },
    resource: { embedded: 'always' },
    action: { embedded: 'always' }
  }
});