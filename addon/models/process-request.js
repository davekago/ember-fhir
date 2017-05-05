import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  action: attr('string'),
  target: belongsTo('reference', { async: false }),
  created: attr('date'),
  provider: belongsTo('reference', { async: false }),
  organization: belongsTo('reference', { async: false }),
  request: belongsTo('reference', { async: false }),
  response: belongsTo('reference', { async: false }),
  nullify: attr('boolean', { allowNull: true }),
  reference: attr('string'),
  item: hasMany('process-request-item', { async: true }),
  include: attr(),
  exclude: attr(),
  period: belongsTo('period', { async: false })
});