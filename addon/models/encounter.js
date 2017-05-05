import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  statusHistory: hasMany('encounter-status-history', { async: true }),
  class: belongsTo('coding', { async: false }),
  classHistory: hasMany('encounter-class-history', { async: true }),
  type_: hasMany('codeable-concept', { async: true }),
  priority: belongsTo('codeable-concept', { async: false }),
  subject: belongsTo('reference', { async: false }),
  episodeOfCare: hasMany('reference', { async: true }),
  incomingReferral: hasMany('reference', { async: true }),
  participant: hasMany('encounter-participant', { async: true }),
  appointment: belongsTo('reference', { async: false }),
  period: belongsTo('period', { async: false }),
  length: belongsTo('duration', { async: false }),
  reason: hasMany('codeable-concept', { async: true }),
  diagnosis: hasMany('encounter-diagnosis', { async: true }),
  account: hasMany('reference', { async: true }),
  hospitalization: belongsTo('encounter-hospitalization', { async: false }),
  location: hasMany('encounter-location', { async: true }),
  serviceProvider: belongsTo('reference', { async: false }),
  partOf: belongsTo('reference', { async: false })
});