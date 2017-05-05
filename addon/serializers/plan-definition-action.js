import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    code: { embedded: 'always' },
    reason: { embedded: 'always' },
    documentation: { embedded: 'always' },
    triggerDefinition: { embedded: 'always' },
    condition: { embedded: 'always' },
    input: { embedded: 'always' },
    output: { embedded: 'always' },
    relatedAction: { embedded: 'always' },
    timingPeriod: { embedded: 'always' },
    timingDuration: { embedded: 'always' },
    timingRange: { embedded: 'always' },
    timingTiming: { embedded: 'always' },
    participant: { embedded: 'always' },
    type_: { embedded: 'always' },
    definition: { embedded: 'always' },
    transform: { embedded: 'always' },
    dynamicValue: { embedded: 'always' },
    action: { embedded: 'always' }
  }
});