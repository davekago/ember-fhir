import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  type_: attr('string'),
  uri: attr('string'),
  display: attr('string')
});