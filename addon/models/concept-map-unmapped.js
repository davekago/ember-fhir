import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  mode: attr('string'),
  code: attr('string'),
  display: attr('string'),
  url: attr('string')
});