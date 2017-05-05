import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  type_: attr('string'),
  url: attr('string'),
  name: attr('string'),
  datasetId: attr('string'),
  variantsetId: attr('string'),
  readsetId: attr('string')
});