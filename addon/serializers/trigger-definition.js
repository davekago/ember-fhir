import ElementSerializer from 'ember-fhir/serializers/element';

export default ElementSerializer.extend({
  attrs: {
    eventTimingTiming: { embedded: 'always' },
    eventTimingReference: { embedded: 'always' },
    eventData: { embedded: 'always' }
  }
});