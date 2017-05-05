import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  udi: belongsTo('device-udi', { async: false }),
  status: attr('string'),
  type_: belongsTo('codeable-concept', { async: false }),
  lotNumber: attr('string'),
  manufacturer: attr('string'),
  manufactureDate: attr('date'),
  expirationDate: attr('date'),
  model: attr('string'),
  version: attr('string'),
  patient: belongsTo('reference', { async: false }),
  owner: belongsTo('reference', { async: false }),
  contact: hasMany('contact-point', { async: true }),
  location: belongsTo('reference', { async: false }),
  url: attr('string'),
  note: hasMany('annotation', { async: true }),
  safety: hasMany('codeable-concept', { async: true })
});