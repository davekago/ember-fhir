import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  event: belongsTo('coding', { async: false }),
  destination: hasMany('message-header-destination', { async: true }),
  receiver: belongsTo('reference', { async: false }),
  sender: belongsTo('reference', { async: false }),
  timestamp: attr('string'),
  enterer: belongsTo('reference', { async: false }),
  author: belongsTo('reference', { async: false }),
  source: belongsTo('message-header-source', { async: false }),
  responsible: belongsTo('reference', { async: false }),
  reason: belongsTo('codeable-concept', { async: false }),
  response: belongsTo('message-header-response', { async: false }),
  focus: hasMany('reference', { async: true })
});