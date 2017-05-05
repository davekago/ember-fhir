import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  type_: belongsTo('codeable-concept', { async: false }),
  subType: hasMany('codeable-concept', { async: true }),
  use: attr('string'),
  patient: belongsTo('reference', { async: false }),
  billablePeriod: belongsTo('period', { async: false }),
  created: attr('date'),
  enterer: belongsTo('reference', { async: false }),
  insurer: belongsTo('reference', { async: false }),
  provider: belongsTo('reference', { async: false }),
  organization: belongsTo('reference', { async: false }),
  priority: belongsTo('codeable-concept', { async: false }),
  fundsReserve: belongsTo('codeable-concept', { async: false }),
  related: hasMany('claim-related', { async: true }),
  prescription: belongsTo('reference', { async: false }),
  originalPrescription: belongsTo('reference', { async: false }),
  payee: belongsTo('claim-payee', { async: false }),
  referral: belongsTo('reference', { async: false }),
  facility: belongsTo('reference', { async: false }),
  careTeam: hasMany('claim-care-team', { async: true }),
  information: hasMany('claim-information', { async: true }),
  diagnosis: hasMany('claim-diagnosis', { async: true }),
  procedure: hasMany('claim-procedure', { async: true }),
  insurance: hasMany('claim-insurance', { async: true }),
  accident: belongsTo('claim-accident', { async: false }),
  employmentImpacted: belongsTo('period', { async: false }),
  hospitalization: belongsTo('period', { async: false }),
  item: hasMany('claim-item', { async: true }),
  total: belongsTo('money', { async: false })
});