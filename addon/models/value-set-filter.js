import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  property: attr('string'),
  op: attr('string'),
  value: attr('string')
});