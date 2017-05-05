import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: belongsTo('identifier', { async: false }),
  status: attr('string'),
  type_: belongsTo('codeable-concept', { async: false }),
  class: belongsTo('codeable-concept', { async: false }),
  subject: belongsTo('reference', { async: false }),
  encounter: belongsTo('reference', { async: false }),
  date: attr('date'),
  author: hasMany('reference', { async: true }),
  title: attr('string'),
  confidentiality: attr('string'),
  attester: hasMany('composition-attester', { async: true }),
  custodian: belongsTo('reference', { async: false }),
  relatesTo: hasMany('composition-relates-to', { async: true }),
  event: hasMany('composition-event', { async: true }),
  section: hasMany('composition-section', { async: true })
});