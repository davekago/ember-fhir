import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  category: hasMany('codeable-concept', { async: true }),
  priority: belongsTo('codeable-concept', { async: false }),
  description: belongsTo('codeable-concept', { async: false }),
  subject: belongsTo('reference', { async: false }),
  startDate: attr('date'),
  startCodeableConcept: belongsTo('codeable-concept', { async: false }),
  target: belongsTo('goal-target', { async: false }),
  statusDate: attr('date'),
  statusReason: attr('string'),
  expressedBy: belongsTo('reference', { async: false }),
  addresses: hasMany('reference', { async: true }),
  note: hasMany('annotation', { async: true }),
  outcomeCode: hasMany('codeable-concept', { async: true }),
  outcomeReference: hasMany('reference', { async: true })
});