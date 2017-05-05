import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  name: attr('string'),
  source: hasMany('structure-map-source', { async: true }),
  target: hasMany('structure-map-target', { async: true }),
  rule: hasMany('structure-map-rule', { async: true }),
  dependent: hasMany('structure-map-dependent', { async: true }),
  documentation: attr('string')
});