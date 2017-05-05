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
  contact: hasMany('contact-detail', { async: true }),
  description: attr('string'),
  useContext: hasMany('usage-context', { async: true }),
  jurisdiction: hasMany('codeable-concept', { async: true }),
  purpose: attr('string'),
  copyright: attr('string'),
  keyword: hasMany('coding', { async: true }),
  fhirVersion: attr('string'),
  mapping: hasMany('structure-definition-mapping', { async: true }),
  kind: attr('string'),
  abstract: attr('boolean', { allowNull: true }),
  contextType: attr('string'),
  context: attr(),
  contextInvariant: attr(),
  type_: attr('string'),
  baseDefinition: attr('string'),
  derivation: attr('string'),
  snapshot: belongsTo('structure-definition-snapshot', { async: false }),
  differential: belongsTo('structure-definition-differential', { async: false })
});