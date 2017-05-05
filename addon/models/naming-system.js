import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  name: attr('string'),
  status: attr('string'),
  kind: attr('string'),
  date: attr('date'),
  publisher: attr('string'),
  contact: hasMany('contact-detail', { async: true }),
  responsible: attr('string'),
  type_: belongsTo('codeable-concept', { async: false }),
  description: attr('string'),
  useContext: hasMany('usage-context', { async: true }),
  jurisdiction: hasMany('codeable-concept', { async: true }),
  usage: attr('string'),
  uniqueId: hasMany('naming-system-unique-id', { async: true }),
  replacedBy: belongsTo('reference', { async: false })
});