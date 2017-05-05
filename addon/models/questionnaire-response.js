import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: belongsTo('identifier', { async: false }),
  basedOn: hasMany('reference', { async: true }),
  parent: hasMany('reference', { async: true }),
  questionnaire: belongsTo('reference', { async: false }),
  status: attr('string'),
  subject: belongsTo('reference', { async: false }),
  context: belongsTo('reference', { async: false }),
  authored: attr('date'),
  author: belongsTo('reference', { async: false }),
  source: belongsTo('reference', { async: false }),
  item: hasMany('questionnaire-response-item', { async: true })
});