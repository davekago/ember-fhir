import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  source: attr('string'),
  sourceVersion: attr('string'),
  target: attr('string'),
  targetVersion: attr('string'),
  element: hasMany('concept-map-element', { async: true }),
  unmapped: belongsTo('concept-map-unmapped', { async: false })
});