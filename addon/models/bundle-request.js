import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  method: attr('string'),
  url: attr('string'),
  ifNoneMatch: attr('string'),
  ifModifiedSince: attr('string'),
  ifMatch: attr('string'),
  ifNoneExist: attr('string')
});