import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  path: attr('string'),
  min: attr('number'),
  max: attr('string')
});