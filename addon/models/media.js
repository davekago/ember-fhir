import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  basedOn: hasMany('reference', { async: true }),
  type_: attr('string'),
  subtype: belongsTo('codeable-concept', { async: false }),
  view: belongsTo('codeable-concept', { async: false }),
  subject: belongsTo('reference', { async: false }),
  context: belongsTo('reference', { async: false }),
  occurrenceDateTime: attr('date'),
  occurrencePeriod: belongsTo('period', { async: false }),
  operator: belongsTo('reference', { async: false }),
  reasonCode: hasMany('codeable-concept', { async: true }),
  bodySite: belongsTo('codeable-concept', { async: false }),
  device: belongsTo('reference', { async: false }),
  height: attr('number'),
  width: attr('number'),
  frames: attr('number'),
  duration: attr('number'),
  content: belongsTo('attachment', { async: false }),
  note: hasMany('annotation', { async: true })
});