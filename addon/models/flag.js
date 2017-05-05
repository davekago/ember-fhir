import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  category: belongsTo('codeable-concept', { async: false }),
  code: belongsTo('codeable-concept', { async: false }),
  subject: belongsTo('reference', { async: false }),
  period: belongsTo('period', { async: false }),
  encounter: belongsTo('reference', { async: false }),
  author: belongsTo('reference', { async: false })
});