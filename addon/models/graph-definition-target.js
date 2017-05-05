import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  type_: attr('string'),
  profile: attr('string'),
  compartment: hasMany('graph-definition-compartment', { async: true }),
  link: hasMany('graph-definition-link', { async: true })
});