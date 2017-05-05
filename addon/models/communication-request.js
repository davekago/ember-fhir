import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  basedOn: hasMany('reference', { async: true }),
  replaces: hasMany('reference', { async: true }),
  groupIdentifier: belongsTo('identifier', { async: false }),
  status: attr('string'),
  category: hasMany('codeable-concept', { async: true }),
  priority: attr('string'),
  medium: hasMany('codeable-concept', { async: true }),
  subject: belongsTo('reference', { async: false }),
  recipient: hasMany('reference', { async: true }),
  topic: hasMany('reference', { async: true }),
  context: belongsTo('reference', { async: false }),
  payload: hasMany('communication-request-payload', { async: true }),
  occurrenceDateTime: attr('date'),
  occurrencePeriod: belongsTo('period', { async: false }),
  authoredOn: attr('date'),
  sender: belongsTo('reference', { async: false }),
  requester: belongsTo('communication-request-requester', { async: false }),
  reasonCode: hasMany('codeable-concept', { async: true }),
  reasonReference: hasMany('reference', { async: true }),
  note: hasMany('annotation', { async: true })
});