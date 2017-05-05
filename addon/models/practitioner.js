import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  active: attr('boolean', { allowNull: true }),
  name: hasMany('human-name', { async: true }),
  telecom: hasMany('contact-point', { async: true }),
  address: hasMany('address', { async: true }),
  gender: attr('string'),
  birthDate: attr('date'),
  photo: hasMany('attachment', { async: true }),
  qualification: hasMany('practitioner-qualification', { async: true }),
  communication: hasMany('codeable-concept', { async: true })
});