import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  label: attr('string'),
  title: attr('string'),
  description: attr('string'),
  textEquivalent: attr('string'),
  code: hasMany('codeable-concept', { async: true }),
  reason: hasMany('codeable-concept', { async: true }),
  documentation: hasMany('related-artifact', { async: true }),
  goalId: attr(),
  triggerDefinition: hasMany('trigger-definition', { async: true }),
  condition: hasMany('plan-definition-condition', { async: true }),
  input: hasMany('data-requirement', { async: true }),
  output: hasMany('data-requirement', { async: true }),
  relatedAction: hasMany('plan-definition-related-action', { async: true }),
  timingDateTime: attr('date'),
  timingPeriod: belongsTo('period', { async: false }),
  timingDuration: belongsTo('duration', { async: false }),
  timingRange: belongsTo('range', { async: false }),
  timingTiming: belongsTo('timing', { async: false }),
  participant: hasMany('plan-definition-participant', { async: true }),
  type_: belongsTo('coding', { async: false }),
  groupingBehavior: attr('string'),
  selectionBehavior: attr('string'),
  requiredBehavior: attr('string'),
  precheckBehavior: attr('string'),
  cardinalityBehavior: attr('string'),
  definition: belongsTo('reference', { async: false }),
  transform: belongsTo('reference', { async: false }),
  dynamicValue: hasMany('plan-definition-dynamic-value', { async: true }),
  action: hasMany('plan-definition-action', { async: true })
});