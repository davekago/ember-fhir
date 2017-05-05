import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  definition: hasMany('reference', { async: true }),
  basedOn: hasMany('reference', { async: true }),
  partOf: hasMany('reference', { async: true }),
  status: attr('string'),
  notDone: attr('boolean', { allowNull: true }),
  notDoneReason: belongsTo('codeable-concept', { async: false }),
  category: belongsTo('codeable-concept', { async: false }),
  code: belongsTo('codeable-concept', { async: false }),
  subject: belongsTo('reference', { async: false }),
  context: belongsTo('reference', { async: false }),
  performedDateTime: attr('date'),
  performedPeriod: belongsTo('period', { async: false }),
  performer: hasMany('procedure-performer', { async: true }),
  location: belongsTo('reference', { async: false }),
  reasonCode: hasMany('codeable-concept', { async: true }),
  reasonReference: hasMany('reference', { async: true }),
  bodySite: hasMany('codeable-concept', { async: true }),
  outcome: belongsTo('codeable-concept', { async: false }),
  report: hasMany('reference', { async: true }),
  complication: hasMany('codeable-concept', { async: true }),
  complicationDetail: hasMany('reference', { async: true }),
  followUp: hasMany('codeable-concept', { async: true }),
  note: hasMany('annotation', { async: true }),
  focalDevice: hasMany('procedure-focal-device', { async: true }),
  usedReference: hasMany('reference', { async: true }),
  usedCode: hasMany('codeable-concept', { async: true })
});