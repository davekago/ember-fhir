import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    vaccineCode: { embedded: 'always' },
    targetDisease: { embedded: 'always' },
    forecastStatus: { embedded: 'always' },
    dateCriterion: { embedded: 'always' },
    protocol: { embedded: 'always' },
    supportingImmunization: { embedded: 'always' },
    supportingPatientInformation: { embedded: 'always' }
  }
});