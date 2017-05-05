import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  created: attr('date'),
  insurer: belongsTo('reference', { async: false }),
  provider: belongsTo('reference', { async: false }),
  organization: belongsTo('reference', { async: false }),
  subject: belongsTo('reference', { async: false }),
  coverage: belongsTo('reference', { async: false })
});