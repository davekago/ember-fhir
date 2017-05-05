import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  identifier: belongsTo('identifier', { async: false }),
  usage: hasMany('codeable-concept', { async: true }),
  criteria: attr('string'),
  path: attr('string')
});