import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  request: belongsTo('reference', { async: false }),
  response: belongsTo('reference', { async: false }),
  statusDate: attr('date'),
  created: attr('date'),
  target: belongsTo('reference', { async: false }),
  provider: belongsTo('reference', { async: false }),
  organization: belongsTo('reference', { async: false }),
  paymentStatus: belongsTo('codeable-concept', { async: false })
});