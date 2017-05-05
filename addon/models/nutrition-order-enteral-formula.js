import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  baseFormulaType: belongsTo('codeable-concept', { async: false }),
  baseFormulaProductName: attr('string'),
  additiveType: belongsTo('codeable-concept', { async: false }),
  additiveProductName: attr('string'),
  caloricDensity: belongsTo('quantity', { async: false }),
  routeofAdministration: belongsTo('codeable-concept', { async: false }),
  administration: hasMany('nutrition-order-administration', { async: true }),
  maxVolumeToDeliver: belongsTo('quantity', { async: false }),
  administrationInstruction: attr('string')
});