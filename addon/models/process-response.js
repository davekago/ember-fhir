import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  created: attr('date'),
  organization: belongsTo('reference', { async: false }),
  request: belongsTo('reference', { async: false }),
  outcome: belongsTo('codeable-concept', { async: false }),
  disposition: attr('string'),
  requestProvider: belongsTo('reference', { async: false }),
  requestOrganization: belongsTo('reference', { async: false }),
  form: belongsTo('codeable-concept', { async: false }),
  processNote: hasMany('process-response-process-note', { async: true }),
  error: hasMany('codeable-concept', { async: true }),
  communicationRequest: hasMany('reference', { async: true })
});