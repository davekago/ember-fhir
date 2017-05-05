import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  partOf: hasMany('reference', { async: true }),
  status: attr('string'),
  category: belongsTo('codeable-concept', { async: false }),
  medicationCodeableConcept: belongsTo('codeable-concept', { async: false }),
  medicationReference: belongsTo('reference', { async: false }),
  subject: belongsTo('reference', { async: false }),
  context: belongsTo('reference', { async: false }),
  supportingInformation: hasMany('reference', { async: true }),
  performer: hasMany('medication-dispense-performer', { async: true }),
  authorizingPrescription: hasMany('reference', { async: true }),
  type_: belongsTo('codeable-concept', { async: false }),
  quantity: belongsTo('quantity', { async: false }),
  daysSupply: belongsTo('quantity', { async: false }),
  whenPrepared: attr('date'),
  whenHandedOver: attr('date'),
  destination: belongsTo('reference', { async: false }),
  receiver: hasMany('reference', { async: true }),
  note: hasMany('annotation', { async: true }),
  dosageInstruction: hasMany('dosage', { async: true }),
  substitution: belongsTo('medication-dispense-substitution', { async: false }),
  detectedIssue: hasMany('reference', { async: true }),
  notDone: attr('boolean', { allowNull: true }),
  notDoneReasonCodeableConcept: belongsTo('codeable-concept', { async: false }),
  notDoneReasonReference: belongsTo('reference', { async: false }),
  eventHistory: hasMany('reference', { async: true })
});