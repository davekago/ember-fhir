import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  context: attr('string'),
  contextType: attr('string'),
  element: attr('string'),
  variable: attr('string'),
  listMode: attr(),
  listRuleId: attr('string'),
  transform: attr('string'),
  parameter: hasMany('structure-map-parameter', { async: true })
});