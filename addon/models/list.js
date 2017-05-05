import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  mode: attr('string'),
  title: attr('string'),
  code: belongsTo('codeable-concept', { async: false }),
  subject: belongsTo('reference', { async: false }),
  encounter: belongsTo('reference', { async: false }),
  date: attr('date'),
  source: belongsTo('reference', { async: false }),
  orderedBy: belongsTo('codeable-concept', { async: false }),
  note: hasMany('annotation', { async: true }),
  entry: hasMany('list-entry', { async: true }),
  emptyReason: belongsTo('codeable-concept', { async: false })
});