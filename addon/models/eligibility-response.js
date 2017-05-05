import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  created: attr('date'),
  requestProvider: belongsTo('reference', { async: false }),
  requestOrganization: belongsTo('reference', { async: false }),
  request: belongsTo('reference', { async: false }),
  outcome: belongsTo('codeable-concept', { async: false }),
  disposition: attr('string'),
  insurer: belongsTo('reference', { async: false }),
  inforce: attr('boolean', { allowNull: true }),
  insurance: hasMany('eligibility-response-insurance', { async: true }),
  form: belongsTo('codeable-concept', { async: false }),
  error: hasMany('eligibility-response-error', { async: true })
});