import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  type_: belongsTo('codeable-concept', { async: false }),
  productName: attr('string'),
  schedule: hasMany('timing', { async: true }),
  quantity: belongsTo('quantity', { async: false }),
  instruction: attr('string')
});