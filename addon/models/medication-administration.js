import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  definition: hasMany('reference', { async: true }),
  partOf: hasMany('reference', { async: true }),
  status: attr('string'),
  category: belongsTo('codeable-concept', { async: false }),
  medicationCodeableConcept: belongsTo('codeable-concept', { async: false }),
  medicationReference: belongsTo('reference', { async: false }),
  subject: belongsTo('reference', { async: false }),
  context: belongsTo('reference', { async: false }),
  supportingInformation: hasMany('reference', { async: true }),
  effectiveDateTime: attr('date'),
  effectivePeriod: belongsTo('period', { async: false }),
  performer: hasMany('medication-administration-performer', { async: true }),
  notGiven: attr('boolean', { allowNull: true }),
  reasonNotGiven: hasMany('codeable-concept', { async: true }),
  reasonCode: hasMany('codeable-concept', { async: true }),
  reasonReference: hasMany('reference', { async: true }),
  prescription: belongsTo('reference', { async: false }),
  device: hasMany('reference', { async: true }),
  note: hasMany('annotation', { async: true }),
  dosage: belongsTo('medication-administration-dosage', { async: false }),
  eventHistory: hasMany('reference', { async: true })
});