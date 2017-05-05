import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  serviceCategory: belongsTo('codeable-concept', { async: false }),
  serviceType: hasMany('codeable-concept', { async: true }),
  specialty: hasMany('codeable-concept', { async: true }),
  appointmentType: belongsTo('codeable-concept', { async: false }),
  reason: hasMany('codeable-concept', { async: true }),
  indication: hasMany('reference', { async: true }),
  priority: attr('number'),
  description: attr('string'),
  supportingInformation: hasMany('reference', { async: true }),
  start: attr('string'),
  end: attr('string'),
  minutesDuration: attr('number'),
  slot: hasMany('reference', { async: true }),
  created: attr('date'),
  comment: attr('string'),
  incomingReferral: hasMany('reference', { async: true }),
  participant: hasMany('appointment-participant', { async: true }),
  requestedPeriod: hasMany('period', { async: true })
});