import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  code: attr('string'),
  uri: attr('string'),
  description: attr('string'),
  type_: attr('string')
});