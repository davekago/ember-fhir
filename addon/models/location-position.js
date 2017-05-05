import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  longitude: attr('number'),
  latitude: attr('number'),
  altitude: attr('number')
});