import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  type_: attr('string'),
  endpoint: attr('string'),
  payload: attr('string'),
  header: attr()
});