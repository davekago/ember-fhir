import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  uid: attr('string'),
  number: attr('number'),
  sopClass: attr('string'),
  title: attr('string')
});