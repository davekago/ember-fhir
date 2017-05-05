import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  identity: attr('string'),
  uri: attr('string'),
  name: attr('string'),
  comment: attr('string')
});