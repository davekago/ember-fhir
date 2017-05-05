import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  doseSequence: attr('number'),
  description: attr('string'),
  authority: belongsTo('reference', { async: false }),
  series: attr('string'),
  seriesDoses: attr('number'),
  targetDisease: hasMany('codeable-concept', { async: true }),
  doseStatus: belongsTo('codeable-concept', { async: false }),
  doseStatusReason: belongsTo('codeable-concept', { async: false })
});