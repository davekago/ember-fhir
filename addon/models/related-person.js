import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  active: attr('boolean', { allowNull: true }),
  patient: belongsTo('reference', { async: false }),
  relationship: belongsTo('codeable-concept', { async: false }),
  name: hasMany('human-name', { async: true }),
  telecom: hasMany('contact-point', { async: true }),
  gender: attr('string'),
  birthDate: attr('date'),
  address: hasMany('address', { async: true }),
  photo: hasMany('attachment', { async: true }),
  period: belongsTo('period', { async: false })
});