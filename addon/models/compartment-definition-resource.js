import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  code: attr('string'),
  param: attr(),
  documentation: attr('string')
});