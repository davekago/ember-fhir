import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  url: attr('string'),
  version: attr('string'),
  name: attr('string'),
  status: attr('string'),
  kind: attr('string'),
  experimental: attr('boolean', { allowNull: true }),
  date: attr('date'),
  publisher: attr('string'),
  contact: hasMany('contact-detail', { async: true }),
  description: attr('string'),
  useContext: hasMany('usage-context', { async: true }),
  jurisdiction: hasMany('codeable-concept', { async: true }),
  purpose: attr('string'),
  idempotent: attr('boolean', { allowNull: true }),
  code: attr('string'),
  comment: attr('string'),
  base: belongsTo('reference', { async: false }),
  resource: attr(),
  system: attr('boolean', { allowNull: true }),
  type_: attr('boolean', { allowNull: true }),
  instance: attr('boolean', { allowNull: true }),
  parameter: hasMany('operation-definition-parameter', { async: true }),
  overload: hasMany('operation-definition-overload', { async: true })
});