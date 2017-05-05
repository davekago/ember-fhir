import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  category: belongsTo('codeable-concept', { async: false }),
  definition: belongsTo('reference', { async: false }),
  code: belongsTo('codeable-concept', { async: false }),
  reasonCode: hasMany('codeable-concept', { async: true }),
  reasonReference: hasMany('reference', { async: true }),
  goal: hasMany('reference', { async: true }),
  status: attr('string'),
  statusReason: attr('string'),
  prohibited: attr('boolean', { allowNull: true }),
  scheduledTiming: belongsTo('timing', { async: false }),
  scheduledPeriod: belongsTo('period', { async: false }),
  scheduledString: attr('string'),
  location: belongsTo('reference', { async: false }),
  performer: hasMany('reference', { async: true }),
  productCodeableConcept: belongsTo('codeable-concept', { async: false }),
  productReference: belongsTo('reference', { async: false }),
  dailyAmount: belongsTo('quantity', { async: false }),
  quantity: belongsTo('quantity', { async: false }),
  description: attr('string')
});