import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  type_: belongsTo('codeable-concept', { async: false }),
  policyHolder: belongsTo('reference', { async: false }),
  subscriber: belongsTo('reference', { async: false }),
  subscriberId: attr('string'),
  beneficiary: belongsTo('reference', { async: false }),
  relationship: belongsTo('codeable-concept', { async: false }),
  period: belongsTo('period', { async: false }),
  payor: hasMany('reference', { async: true }),
  grouping: belongsTo('coverage-grouping', { async: false }),
  dependent: attr('string'),
  sequence: attr('string'),
  order: attr('number'),
  network: attr('string'),
  contract: hasMany('reference', { async: true })
});