import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  accessionIdentifier: belongsTo('identifier', { async: false }),
  status: attr('string'),
  type_: belongsTo('codeable-concept', { async: false }),
  subject: belongsTo('reference', { async: false }),
  receivedTime: attr('date'),
  parent: hasMany('reference', { async: true }),
  request: hasMany('reference', { async: true }),
  collection: belongsTo('specimen-collection', { async: false }),
  processing: hasMany('specimen-processing', { async: true }),
  container_: hasMany('specimen-container', { async: true }),
  note: hasMany('annotation', { async: true })
});