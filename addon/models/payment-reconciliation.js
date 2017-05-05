import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  period: belongsTo('period', { async: false }),
  created: attr('date'),
  organization: belongsTo('reference', { async: false }),
  request: belongsTo('reference', { async: false }),
  outcome: belongsTo('codeable-concept', { async: false }),
  disposition: attr('string'),
  requestProvider: belongsTo('reference', { async: false }),
  requestOrganization: belongsTo('reference', { async: false }),
  detail: hasMany('payment-reconciliation-detail', { async: true }),
  form: belongsTo('codeable-concept', { async: false }),
  total: belongsTo('money', { async: false }),
  processNote: hasMany('payment-reconciliation-process-note', { async: true })
});