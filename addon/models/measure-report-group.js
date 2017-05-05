import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  identifier: belongsTo('identifier', { async: false }),
  population: hasMany('measure-report-population', { async: true }),
  measureScore: attr('number'),
  stratifier: hasMany('measure-report-stratifier', { async: true })
});