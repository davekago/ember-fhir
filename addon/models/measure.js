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
  usage: attr('string'),
  approvalDate: attr('date'),
  lastReviewDate: attr('date'),
  effectivePeriod: belongsTo('period', { async: false }),
  useContext: hasMany('usage-context', { async: true }),
  jurisdiction: hasMany('codeable-concept', { async: true }),
  topic: hasMany('codeable-concept', { async: true }),
  contributor: hasMany('contributor', { async: true }),
  contact: hasMany('contact-detail', { async: true }),
  copyright: attr('string'),
  relatedArtifact: hasMany('related-artifact', { async: true }),
  library: hasMany('reference', { async: true }),
  disclaimer: attr('string'),
  scoring: belongsTo('codeable-concept', { async: false }),
  compositeScoring: belongsTo('codeable-concept', { async: false }),
  type_: hasMany('codeable-concept', { async: true }),
  riskAdjustment: attr('string'),
  rateAggregation: attr('string'),
  rationale: attr('string'),
  clinicalRecommendationStatement: attr('string'),
  improvementNotation: attr('string'),
  definition: attr(),
  guidance: attr('string'),
  set: attr('string'),
  group: hasMany('measure-group', { async: true }),
  supplementalData: hasMany('measure-supplemental-data', { async: true })
});