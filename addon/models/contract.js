import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: belongsTo('identifier', { async: false }),
  status: attr('string'),
  issued: attr('date'),
  applies: belongsTo('period', { async: false }),
  subject: hasMany('reference', { async: true }),
  topic: hasMany('reference', { async: true }),
  authority: hasMany('reference', { async: true }),
  domain: hasMany('reference', { async: true }),
  type_: belongsTo('codeable-concept', { async: false }),
  subType: hasMany('codeable-concept', { async: true }),
  action: hasMany('codeable-concept', { async: true }),
  actionReason: hasMany('codeable-concept', { async: true }),
  decisionType: belongsTo('codeable-concept', { async: false }),
  contentDerivative: belongsTo('codeable-concept', { async: false }),
  securityLabel: hasMany('coding', { async: true }),
  agent: hasMany('contract-agent', { async: true }),
  signer: hasMany('contract-signer', { async: true }),
  valuedItem: hasMany('contract-valued-item', { async: true }),
  term: hasMany('contract-term', { async: true }),
  bindingAttachment: belongsTo('attachment', { async: false }),
  bindingReference: belongsTo('reference', { async: false }),
  friendly: hasMany('contract-friendly', { async: true }),
  legal: hasMany('contract-legal', { async: true }),
  rule: hasMany('contract-rule', { async: true })
});