import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: belongsTo('identifier', { async: false }),
  definition: attr(),
  status: attr('string'),
  partOf: hasMany('reference', { async: true }),
  code: belongsTo('codeable-concept', { async: false }),
  subject: belongsTo('reference', { async: false }),
  context: belongsTo('reference', { async: false }),
  occurrenceDateTime: attr('date'),
  occurrencePeriod: belongsTo('period', { async: false }),
  occurrenceTiming: belongsTo('timing', { async: false }),
  participant: hasMany('charge-item-participant', { async: true }),
  performingOrganization: belongsTo('reference', { async: false }),
  requestingOrganization: belongsTo('reference', { async: false }),
  quantity: belongsTo('quantity', { async: false }),
  bodysite: hasMany('codeable-concept', { async: true }),
  factorOverride: attr('number'),
  priceOverride: belongsTo('money', { async: false }),
  overrideReason: attr('string'),
  enterer: belongsTo('reference', { async: false }),
  enteredDate: attr('date'),
  reason: hasMany('codeable-concept', { async: true }),
  service: hasMany('reference', { async: true }),
  account: hasMany('reference', { async: true }),
  note: hasMany('annotation', { async: true }),
  supportingInformation: hasMany('reference', { async: true })
});