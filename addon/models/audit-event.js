import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  type_: belongsTo('coding', { async: false }),
  subtype: hasMany('coding', { async: true }),
  action: attr('string'),
  recorded: attr('string'),
  outcome: attr('string'),
  outcomeDesc: attr('string'),
  purposeOfEvent: hasMany('codeable-concept', { async: true }),
  agent: hasMany('audit-event-agent', { async: true }),
  source: belongsTo('audit-event-source', { async: false }),
  entity: hasMany('audit-event-entity', { async: true })
});