import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr, belongsTo, hasMany } = DS;

export default Element.extend({
  sequence: attr('number'),
  text: attr('string'),
  additionalInstruction: hasMany('codeable-concept', { async: true }),
  patientInstruction: attr('string'),
  timing: belongsTo('timing', { async: false }),
  asNeededBoolean: attr('boolean', { allowNull: true }),
  asNeededCodeableConcept: belongsTo('codeable-concept', { async: false }),
  site: belongsTo('codeable-concept', { async: false }),
  route: belongsTo('codeable-concept', { async: false }),
  method: belongsTo('codeable-concept', { async: false }),
  doseRange: belongsTo('range', { async: false }),
  doseSimpleQuantity: belongsTo('quantity', { async: false }),
  maxDosePerPeriod: belongsTo('ratio', { async: false }),
  maxDosePerAdministration: belongsTo('quantity', { async: false }),
  maxDosePerLifetime: belongsTo('quantity', { async: false }),
  rateRatio: belongsTo('ratio', { async: false }),
  rateRange: belongsTo('range', { async: false }),
  rateSimpleQuantity: belongsTo('quantity', { async: false })
});