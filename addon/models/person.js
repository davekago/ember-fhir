import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  name: hasMany('human-name', { async: true }),
  telecom: hasMany('contact-point', { async: true }),
  gender: attr('string'),
  birthDate: attr('date'),
  address: hasMany('address', { async: true }),
  photo: belongsTo('attachment', { async: false }),
  managingOrganization: belongsTo('reference', { async: false }),
  active: attr('boolean', { allowNull: true }),
  link: hasMany('person-link', { async: true })
});