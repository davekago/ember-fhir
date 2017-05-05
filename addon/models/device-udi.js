import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  deviceIdentifier: attr('string'),
  name: attr('string'),
  jurisdiction: attr('string'),
  carrierHRF: attr('string'),
  carrierAIDC: attr('string'),
  issuer: attr('string'),
  entryType: attr('string')
});