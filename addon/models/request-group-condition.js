import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  kind: attr('string'),
  description: attr('string'),
  language: attr('string'),
  expression: attr('string')
});