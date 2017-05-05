import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  patient: belongsTo('reference', { async: false }),
  encounter: belongsTo('reference', { async: false }),
  dateTime: attr('date'),
  orderer: belongsTo('reference', { async: false }),
  allergyIntolerance: hasMany('reference', { async: true }),
  foodPreferenceModifier: hasMany('codeable-concept', { async: true }),
  excludeFoodModifier: hasMany('codeable-concept', { async: true }),
  oralDiet: belongsTo('nutrition-order-oral-diet', { async: false }),
  supplement: hasMany('nutrition-order-supplement', { async: true }),
  enteralFormula: belongsTo('nutrition-order-enteral-formula', { async: false })
});