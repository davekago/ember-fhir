import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  definition: hasMany('reference', { async: true }),
  basedOn: hasMany('reference', { async: true }),
  groupIdentifier: belongsTo('identifier', { async: false }),
  status: attr('string'),
  intent: attr('string'),
  category: belongsTo('codeable-concept', { async: false }),
  priority: attr('string'),
  medicationCodeableConcept: belongsTo('codeable-concept', { async: false }),
  medicationReference: belongsTo('reference', { async: false }),
  subject: belongsTo('reference', { async: false }),
  context: belongsTo('reference', { async: false }),
  supportingInformation: hasMany('reference', { async: true }),
  authoredOn: attr('date'),
  requester: belongsTo('medication-request-requester', { async: false }),
  recorder: belongsTo('reference', { async: false }),
  reasonCode: hasMany('codeable-concept', { async: true }),
  reasonReference: hasMany('reference', { async: true }),
  note: hasMany('annotation', { async: true }),
  dosageInstruction: hasMany('dosage', { async: true }),
  dispenseRequest: belongsTo('medication-request-dispense-request', { async: false }),
  substitution: belongsTo('medication-request-substitution', { async: false }),
  priorPrescription: belongsTo('reference', { async: false }),
  detectedIssue: hasMany('reference', { async: true }),
  eventHistory: hasMany('reference', { async: true })
});