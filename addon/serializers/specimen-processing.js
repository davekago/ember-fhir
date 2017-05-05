import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    procedure: { embedded: 'always' },
    additive: { embedded: 'always' },
    timePeriod: { embedded: 'always' }
  }
});