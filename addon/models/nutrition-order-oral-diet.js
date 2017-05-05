import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  type_: hasMany('codeable-concept', { async: true }),
  schedule: hasMany('timing', { async: true }),
  nutrient: hasMany('nutrition-order-nutrient', { async: true }),
  texture: hasMany('nutrition-order-texture', { async: true }),
  fluidConsistencyType: hasMany('codeable-concept', { async: true }),
  instruction: attr('string')
});