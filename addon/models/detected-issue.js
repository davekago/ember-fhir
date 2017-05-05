import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: belongsTo('identifier', { async: false }),
  status: attr('string'),
  category: belongsTo('codeable-concept', { async: false }),
  severity: attr('string'),
  patient: belongsTo('reference', { async: false }),
  date: attr('date'),
  author: belongsTo('reference', { async: false }),
  implicated: hasMany('reference', { async: true }),
  detail: attr('string'),
  reference: attr('string'),
  mitigation: hasMany('detected-issue-mitigation', { async: true })
});