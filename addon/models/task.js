import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  definitionUri: attr('string'),
  definitionReference: belongsTo('reference', { async: false }),
  basedOn: hasMany('reference', { async: true }),
  groupIdentifier: belongsTo('identifier', { async: false }),
  partOf: hasMany('reference', { async: true }),
  status: attr('string'),
  statusReason: belongsTo('codeable-concept', { async: false }),
  businessStatus: belongsTo('codeable-concept', { async: false }),
  intent: attr('string'),
  priority: attr('string'),
  code: belongsTo('codeable-concept', { async: false }),
  description: attr('string'),
  focus: belongsTo('reference', { async: false }),
  for: belongsTo('reference', { async: false }),
  context: belongsTo('reference', { async: false }),
  executionPeriod: belongsTo('period', { async: false }),
  authoredOn: attr('date'),
  lastModified: attr('date'),
  requester: belongsTo('task-requester', { async: false }),
  performerType: hasMany('codeable-concept', { async: true }),
  owner: belongsTo('reference', { async: false }),
  reason: belongsTo('codeable-concept', { async: false }),
  note: hasMany('annotation', { async: true }),
  relevantHistory: hasMany('reference', { async: true }),
  restriction: belongsTo('task-restriction', { async: false }),
  input: hasMany('task-input', { async: true }),
  output: hasMany('task-output', { async: true })
});