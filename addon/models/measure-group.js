import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  identifier: belongsTo('identifier', { async: false }),
  name: attr('string'),
  description: attr('string'),
  population: hasMany('measure-population', { async: true }),
  stratifier: hasMany('measure-stratifier', { async: true })
});