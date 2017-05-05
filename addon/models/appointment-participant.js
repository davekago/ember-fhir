import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  type_: hasMany('codeable-concept', { async: true }),
  actor: belongsTo('reference', { async: false }),
  required: attr('string'),
  status: attr('string')
});