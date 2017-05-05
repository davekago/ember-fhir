import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  subject: belongsTo('reference', { async: false }),
  whenUsed: belongsTo('period', { async: false }),
  timingTiming: belongsTo('timing', { async: false }),
  timingPeriod: belongsTo('period', { async: false }),
  timingDateTime: attr('date'),
  recordedOn: attr('date'),
  source: belongsTo('reference', { async: false }),
  device: belongsTo('reference', { async: false }),
  indication: hasMany('codeable-concept', { async: true }),
  bodySite: belongsTo('codeable-concept', { async: false }),
  note: hasMany('annotation', { async: true })
});