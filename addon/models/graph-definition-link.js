import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  path: attr('string'),
  sliceName: attr('string'),
  min: attr('number'),
  max: attr('string'),
  description: attr('string'),
  target: hasMany('graph-definition-target', { async: true })
});