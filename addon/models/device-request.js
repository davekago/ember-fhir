import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  definition: hasMany('reference', { async: true }),
  basedOn: hasMany('reference', { async: true }),
  priorRequest: hasMany('reference', { async: true }),
  groupIdentifier: belongsTo('identifier', { async: false }),
  status: attr('string'),
  intent: belongsTo('codeable-concept', { async: false }),
  priority: attr('string'),
  codeReference: belongsTo('reference', { async: false }),
  codeCodeableConcept: belongsTo('codeable-concept', { async: false }),
  subject: belongsTo('reference', { async: false }),
  context: belongsTo('reference', { async: false }),
  occurrenceDateTime: attr('date'),
  occurrencePeriod: belongsTo('period', { async: false }),
  occurrenceTiming: belongsTo('timing', { async: false }),
  authoredOn: attr('date'),
  requester: belongsTo('device-request-requester', { async: false }),
  performerType: belongsTo('codeable-concept', { async: false }),
  performer: belongsTo('reference', { async: false }),
  reasonCode: hasMany('codeable-concept', { async: true }),
  reasonReference: hasMany('reference', { async: true }),
  supportingInfo: hasMany('reference', { async: true }),
  note: hasMany('annotation', { async: true }),
  relevantHistory: hasMany('reference', { async: true })
});