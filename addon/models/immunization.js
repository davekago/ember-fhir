import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  notGiven: attr('boolean', { allowNull: true }),
  vaccineCode: belongsTo('codeable-concept', { async: false }),
  patient: belongsTo('reference', { async: false }),
  encounter: belongsTo('reference', { async: false }),
  date: attr('date'),
  primarySource: attr('boolean', { allowNull: true }),
  reportOrigin: belongsTo('codeable-concept', { async: false }),
  location: belongsTo('reference', { async: false }),
  manufacturer: belongsTo('reference', { async: false }),
  lotNumber: attr('string'),
  expirationDate: attr('date'),
  site: belongsTo('codeable-concept', { async: false }),
  route: belongsTo('codeable-concept', { async: false }),
  doseQuantity: belongsTo('quantity', { async: false }),
  practitioner: hasMany('immunization-practitioner', { async: true }),
  note: hasMany('annotation', { async: true }),
  explanation: belongsTo('immunization-explanation', { async: false }),
  reaction: hasMany('immunization-reaction', { async: true }),
  vaccinationProtocol: hasMany('immunization-vaccination-protocol', { async: true })
});