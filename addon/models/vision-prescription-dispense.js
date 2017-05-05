import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  product: belongsTo('codeable-concept', { async: false }),
  eye: attr('string'),
  sphere: attr('number'),
  cylinder: attr('number'),
  axis: attr('number'),
  prism: attr('number'),
  base: attr('string'),
  add: attr('number'),
  power: attr('number'),
  backCurve: attr('number'),
  diameter: attr('number'),
  duration: belongsTo('quantity', { async: false }),
  color: attr('string'),
  brand: attr('string'),
  note: hasMany('annotation', { async: true })
});