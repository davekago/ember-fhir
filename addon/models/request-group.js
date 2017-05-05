import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  definition: hasMany('reference', { async: true }),
  basedOn: hasMany('reference', { async: true }),
  replaces: hasMany('reference', { async: true }),
  groupIdentifier: belongsTo('identifier', { async: false }),
  status: attr('string'),
  intent: attr('string'),
  priority: attr('string'),
  subject: belongsTo('reference', { async: false }),
  context: belongsTo('reference', { async: false }),
  authoredOn: attr('date'),
  author: belongsTo('reference', { async: false }),
  reasonCodeableConcept: belongsTo('codeable-concept', { async: false }),
  reasonReference: belongsTo('reference', { async: false }),
  note: hasMany('annotation', { async: true }),
  action: hasMany('request-group-action', { async: true })
});