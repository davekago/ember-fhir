import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  name: attr('string'),
  defaultValue: attr('string'),
  description: attr('string'),
  expression: attr('string'),
  headerField: attr('string'),
  hint: attr('string'),
  path: attr('string'),
  sourceId: attr('string')
});