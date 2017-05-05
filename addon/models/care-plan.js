import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  definition: hasMany('reference', { async: true }),
  basedOn: hasMany('reference', { async: true }),
  replaces: hasMany('reference', { async: true }),
  partOf: hasMany('reference', { async: true }),
  status: attr('string'),
  intent: attr('string'),
  category: hasMany('codeable-concept', { async: true }),
  title: attr('string'),
  description: attr('string'),
  subject: belongsTo('reference', { async: false }),
  context: belongsTo('reference', { async: false }),
  period: belongsTo('period', { async: false }),
  author: hasMany('reference', { async: true }),
  careTeam: hasMany('reference', { async: true }),
  addresses: hasMany('reference', { async: true }),
  supportingInfo: hasMany('reference', { async: true }),
  goal: hasMany('reference', { async: true }),
  activity: hasMany('care-plan-activity', { async: true }),
  note: hasMany('annotation', { async: true })
});