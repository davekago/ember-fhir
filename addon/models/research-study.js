import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  title: attr('string'),
  protocol: hasMany('reference', { async: true }),
  partOf: hasMany('reference', { async: true }),
  status: attr('string'),
  category: hasMany('codeable-concept', { async: true }),
  focus: hasMany('codeable-concept', { async: true }),
  contact: hasMany('contact-detail', { async: true }),
  relatedArtifact: hasMany('related-artifact', { async: true }),
  keyword: hasMany('codeable-concept', { async: true }),
  jurisdiction: hasMany('codeable-concept', { async: true }),
  description: attr('string'),
  enrollment: hasMany('reference', { async: true }),
  period: belongsTo('period', { async: false }),
  sponsor: belongsTo('reference', { async: false }),
  principalInvestigator: belongsTo('reference', { async: false }),
  site: hasMany('reference', { async: true }),
  reasonStopped: belongsTo('codeable-concept', { async: false }),
  note: hasMany('annotation', { async: true }),
  arm: hasMany('research-study-arm', { async: true })
});