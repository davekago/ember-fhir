import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  url: attr('string'),
  mode: attr('string'),
  alias: attr('string'),
  documentation: attr('string')
});