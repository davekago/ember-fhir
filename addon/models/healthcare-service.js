import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  active: attr('boolean', { allowNull: true }),
  providedBy: belongsTo('reference', { async: false }),
  category: belongsTo('codeable-concept', { async: false }),
  type_: hasMany('codeable-concept', { async: true }),
  specialty: hasMany('codeable-concept', { async: true }),
  location: hasMany('reference', { async: true }),
  name: attr('string'),
  comment: attr('string'),
  extraDetails: attr('string'),
  photo: belongsTo('attachment', { async: false }),
  telecom: hasMany('contact-point', { async: true }),
  coverageArea: hasMany('reference', { async: true }),
  serviceProvisionCode: hasMany('codeable-concept', { async: true }),
  eligibility: belongsTo('codeable-concept', { async: false }),
  eligibilityNote: attr('string'),
  programName: attr(),
  characteristic: hasMany('codeable-concept', { async: true }),
  referralMethod: hasMany('codeable-concept', { async: true }),
  appointmentRequired: attr('boolean', { allowNull: true }),
  availableTime: hasMany('healthcare-service-available-time', { async: true }),
  notAvailable: hasMany('healthcare-service-not-available', { async: true }),
  availabilityExceptions: attr('string'),
  endpoint: hasMany('reference', { async: true })
});