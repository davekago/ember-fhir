import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  date: attr('date'),
  vaccineCode: belongsTo('codeable-concept', { async: false }),
  targetDisease: belongsTo('codeable-concept', { async: false }),
  doseNumber: attr('number'),
  forecastStatus: belongsTo('codeable-concept', { async: false }),
  dateCriterion: hasMany('immunization-recommendation-date-criterion', { async: true }),
  protocol: belongsTo('immunization-recommendation-protocol', { async: false }),
  supportingImmunization: hasMany('reference', { async: true }),
  supportingPatientInformation: hasMany('reference', { async: true })
});