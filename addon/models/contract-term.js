import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  identifier: belongsTo('identifier', { async: false }),
  issued: attr('date'),
  applies: belongsTo('period', { async: false }),
  type_: belongsTo('codeable-concept', { async: false }),
  subType: belongsTo('codeable-concept', { async: false }),
  topic: hasMany('reference', { async: true }),
  action: hasMany('codeable-concept', { async: true }),
  actionReason: hasMany('codeable-concept', { async: true }),
  securityLabel: hasMany('coding', { async: true }),
  agent: hasMany('contract-agent-1', { async: true }),
  text: attr('string'),
  valuedItem: hasMany('contract-valued-item-1', { async: true }),
  group: hasMany('contract-term', { async: true })
});