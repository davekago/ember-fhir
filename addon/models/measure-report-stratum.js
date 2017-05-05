import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  value: attr('string'),
  population: hasMany('measure-report-population-1', { async: true }),
  measureScore: attr('number')
});