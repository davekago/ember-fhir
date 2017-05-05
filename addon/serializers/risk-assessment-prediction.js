import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    outcome: { embedded: 'always' },
    probabilityRange: { embedded: 'always' },
    qualitativeRisk: { embedded: 'always' },
    whenPeriod: { embedded: 'always' },
    whenRange: { embedded: 'always' }
  }
});