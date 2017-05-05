import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  masterIdentifier: belongsTo('identifier', { async: false }),
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  type_: belongsTo('codeable-concept', { async: false }),
  subject: belongsTo('reference', { async: false }),
  created: attr('date'),
  author: hasMany('reference', { async: true }),
  recipient: hasMany('reference', { async: true }),
  source: attr('string'),
  description: attr('string'),
  content: hasMany('document-manifest-content', { async: true }),
  related: hasMany('document-manifest-related', { async: true })
});