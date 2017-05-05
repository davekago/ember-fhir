import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  name: attr('string'),
  software: attr('string'),
  version: attr('string'),
  contact: belongsTo('contact-point', { async: false }),
  endpoint: attr('string')
});