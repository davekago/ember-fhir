import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  patient: belongsTo('reference', { async: false }),
  created: attr('date'),
  insurer: belongsTo('reference', { async: false }),
  requestProvider: belongsTo('reference', { async: false }),
  requestOrganization: belongsTo('reference', { async: false }),
  request: belongsTo('reference', { async: false }),
  outcome: belongsTo('codeable-concept', { async: false }),
  disposition: attr('string'),
  payeeType: belongsTo('codeable-concept', { async: false }),
  item: hasMany('claim-response-item', { async: true }),
  addItem: hasMany('claim-response-add-item', { async: true }),
  error: hasMany('claim-response-error', { async: true }),
  totalCost: belongsTo('money', { async: false }),
  unallocDeductable: belongsTo('money', { async: false }),
  totalBenefit: belongsTo('money', { async: false }),
  payment: belongsTo('claim-response-payment', { async: false }),
  reserved: belongsTo('coding', { async: false }),
  form: belongsTo('codeable-concept', { async: false }),
  processNote: hasMany('claim-response-process-note', { async: true }),
  communicationRequest: hasMany('reference', { async: true }),
  insurance: hasMany('claim-response-insurance', { async: true })
});