import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  request: belongsTo('reference', { async: false }),
  outcome: belongsTo('codeable-concept', { async: false }),
  disposition: attr('string'),
  created: attr('date'),
  organization: belongsTo('reference', { async: false }),
  requestProvider: belongsTo('reference', { async: false }),
  requestOrganization: belongsTo('reference', { async: false })
});