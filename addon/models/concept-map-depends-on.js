import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  property: attr('string'),
  system: attr('string'),
  code: attr('string'),
  display: attr('string')
});