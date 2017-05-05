import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  system: attr('string'),
  version: attr('string'),
  concept: hasMany('value-set-concept', { async: true }),
  filter: hasMany('value-set-filter', { async: true }),
  valueSet: attr()
});