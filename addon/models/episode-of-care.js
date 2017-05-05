import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  statusHistory: hasMany('episode-of-care-status-history', { async: true }),
  type_: hasMany('codeable-concept', { async: true }),
  diagnosis: hasMany('episode-of-care-diagnosis', { async: true }),
  patient: belongsTo('reference', { async: false }),
  managingOrganization: belongsTo('reference', { async: false }),
  period: belongsTo('period', { async: false }),
  referralRequest: hasMany('reference', { async: true }),
  careManager: belongsTo('reference', { async: false }),
  team: hasMany('reference', { async: true }),
  account: hasMany('reference', { async: true })
});