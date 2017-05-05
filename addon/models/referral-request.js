import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  definition: hasMany('reference', { async: true }),
  basedOn: hasMany('reference', { async: true }),
  replaces: hasMany('reference', { async: true }),
  groupIdentifier: belongsTo('identifier', { async: false }),
  status: attr('string'),
  intent: attr('string'),
  type_: belongsTo('codeable-concept', { async: false }),
  priority: attr('string'),
  serviceRequested: hasMany('codeable-concept', { async: true }),
  subject: belongsTo('reference', { async: false }),
  context: belongsTo('reference', { async: false }),
  occurrenceDateTime: attr('date'),
  occurrencePeriod: belongsTo('period', { async: false }),
  authoredOn: attr('date'),
  requester: belongsTo('referral-request-requester', { async: false }),
  specialty: belongsTo('codeable-concept', { async: false }),
  recipient: hasMany('reference', { async: true }),
  reasonCode: hasMany('codeable-concept', { async: true }),
  reasonReference: hasMany('reference', { async: true }),
  description: attr('string'),
  supportingInfo: hasMany('reference', { async: true }),
  note: hasMany('annotation', { async: true }),
  relevantHistory: hasMany('reference', { async: true })
});