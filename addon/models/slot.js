import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  serviceCategory: belongsTo('codeable-concept', { async: false }),
  serviceType: hasMany('codeable-concept', { async: true }),
  specialty: hasMany('codeable-concept', { async: true }),
  appointmentType: belongsTo('codeable-concept', { async: false }),
  schedule: belongsTo('reference', { async: false }),
  status: attr('string'),
  start: attr('string'),
  end: attr('string'),
  overbooked: attr('boolean', { allowNull: true }),
  comment: attr('string')
});