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
  category: hasMany('codeable-concept', { async: true }),
  medium: hasMany('codeable-concept', { async: true }),
  subject: belongsTo('reference', { async: false }),
  recipient: hasMany('reference', { async: true }),
  topic: hasMany('reference', { async: true }),
  context: belongsTo('reference', { async: false }),
  sent: attr('date'),
  received: attr('date'),
  sender: belongsTo('reference', { async: false }),
  reasonCode: hasMany('codeable-concept', { async: true }),
  reasonReference: hasMany('reference', { async: true }),
  payload: hasMany('communication-payload', { async: true }),
  note: hasMany('annotation', { async: true })
});