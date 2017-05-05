import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  name: attr('string'),
  extends: attr('string'),
  typeMode: attr('string'),
  documentation: attr('string'),
  input: hasMany('structure-map-input', { async: true }),
  rule: hasMany('structure-map-rule', { async: true })
});