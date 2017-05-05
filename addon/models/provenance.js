import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  target: hasMany('reference', { async: true }),
  period: belongsTo('period', { async: false }),
  recorded: attr('string'),
  policy: attr(),
  location: belongsTo('reference', { async: false }),
  reason: hasMany('coding', { async: true }),
  activity: belongsTo('coding', { async: false }),
  agent: hasMany('provenance-agent', { async: true }),
  entity: hasMany('provenance-entity', { async: true }),
  signature: hasMany('signature', { async: true })
});