import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  url: attr('string'),
  identifier: hasMany('identifier', { async: true }),
  version: attr('string'),
  name: attr('string'),
  title: attr('string'),
  status: attr('string'),
  experimental: attr('boolean', { allowNull: true }),
  date: attr('date'),
  publisher: attr('string'),
  description: attr('string'),
  purpose: attr('string'),
  approvalDate: attr('date'),
  lastReviewDate: attr('date'),
  effectivePeriod: belongsTo('period', { async: false }),
  useContext: hasMany('usage-context', { async: true }),
  jurisdiction: hasMany('codeable-concept', { async: true }),
  contact: hasMany('contact-detail', { async: true }),
  copyright: attr('string'),
  code: hasMany('coding', { async: true }),
  subjectType: attr(),
  item: hasMany('questionnaire-item', { async: true })
});