import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  key: attr('string'),
  requirements: attr('string'),
  severity: attr('string'),
  human: attr('string'),
  expression: attr('string'),
  xpath: attr('string'),
  source: attr('string')
});