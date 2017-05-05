import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    baseFormulaType: { embedded: 'always' },
    additiveType: { embedded: 'always' },
    caloricDensity: { embedded: 'always' },
    routeofAdministration: { embedded: 'always' },
    administration: { embedded: 'always' },
    maxVolumeToDeliver: { embedded: 'always' }
  }
});