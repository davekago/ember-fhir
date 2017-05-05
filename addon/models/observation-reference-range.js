import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  low: belongsTo('quantity', { async: false }),
  high: belongsTo('quantity', { async: false }),
  type_: belongsTo('codeable-concept', { async: false }),
  appliesTo: hasMany('codeable-concept', { async: true }),
  age: belongsTo('range', { async: false }),
  text: attr('string')
});