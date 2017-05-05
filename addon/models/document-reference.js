import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  masterIdentifier: belongsTo('identifier', { async: false }),
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  docStatus: attr('string'),
  type_: belongsTo('codeable-concept', { async: false }),
  class: belongsTo('codeable-concept', { async: false }),
  subject: belongsTo('reference', { async: false }),
  created: attr('date'),
  indexed: attr('string'),
  author: hasMany('reference', { async: true }),
  authenticator: belongsTo('reference', { async: false }),
  custodian: belongsTo('reference', { async: false }),
  relatesTo: hasMany('document-reference-relates-to', { async: true }),
  description: attr('string'),
  securityLabel: hasMany('codeable-concept', { async: true }),
  content: hasMany('document-reference-content', { async: true }),
  context: belongsTo('document-reference-context', { async: false })
});