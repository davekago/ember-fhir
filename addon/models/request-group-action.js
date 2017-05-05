import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  label: attr('string'),
  title: attr('string'),
  description: attr('string'),
  textEquivalent: attr('string'),
  code: hasMany('codeable-concept', { async: true }),
  documentation: hasMany('related-artifact', { async: true }),
  condition: hasMany('request-group-condition', { async: true }),
  relatedAction: hasMany('request-group-related-action', { async: true }),
  timingDateTime: attr('date'),
  timingPeriod: belongsTo('period', { async: false }),
  timingDuration: belongsTo('duration', { async: false }),
  timingRange: belongsTo('range', { async: false }),
  timingTiming: belongsTo('timing', { async: false }),
  participant: hasMany('reference', { async: true }),
  type_: belongsTo('coding', { async: false }),
  groupingBehavior: attr('string'),
  selectionBehavior: attr('string'),
  requiredBehavior: attr('string'),
  precheckBehavior: attr('string'),
  cardinalityBehavior: attr('string'),
  resource: belongsTo('reference', { async: false }),
  action: hasMany('request-group-action', { async: true })
});