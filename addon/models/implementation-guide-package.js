import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  name: attr('string'),
  description: attr('string'),
  resource: hasMany('implementation-guide-resource', { async: true })
});