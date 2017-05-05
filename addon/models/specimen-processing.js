import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  description: attr('string'),
  procedure: belongsTo('codeable-concept', { async: false }),
  additive: hasMany('reference', { async: true }),
  timeDateTime: attr('date'),
  timePeriod: belongsTo('period', { async: false })
});