import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  active: attr('boolean', { allowNull: true }),
  period: belongsTo('period', { async: false }),
  practitioner: belongsTo('reference', { async: false }),
  organization: belongsTo('reference', { async: false }),
  code: hasMany('codeable-concept', { async: true }),
  specialty: hasMany('codeable-concept', { async: true }),
  location: hasMany('reference', { async: true }),
  healthcareService: hasMany('reference', { async: true }),
  telecom: hasMany('contact-point', { async: true }),
  availableTime: hasMany('practitioner-role-available-time', { async: true }),
  notAvailable: hasMany('practitioner-role-not-available', { async: true }),
  availabilityExceptions: attr('string'),
  endpoint: hasMany('reference', { async: true })
});