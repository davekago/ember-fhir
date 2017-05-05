import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  active: attr('boolean', { allowNull: true }),
  name: hasMany('human-name', { async: true }),
  telecom: hasMany('contact-point', { async: true }),
  gender: attr('string'),
  birthDate: attr('date'),
  deceasedBoolean: attr('boolean', { allowNull: true }),
  deceasedDateTime: attr('date'),
  address: hasMany('address', { async: true }),
  maritalStatus: belongsTo('codeable-concept', { async: false }),
  multipleBirthBoolean: attr('boolean', { allowNull: true }),
  multipleBirthInteger: attr('number'),
  photo: hasMany('attachment', { async: true }),
  contact: hasMany('patient-contact', { async: true }),
  animal: belongsTo('patient-animal', { async: false }),
  communication: hasMany('patient-communication', { async: true }),
  generalPractitioner: hasMany('reference', { async: true }),
  managingOrganization: belongsTo('reference', { async: false }),
  link: hasMany('patient-link', { async: true })
});