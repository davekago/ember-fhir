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
  immutable: attr('boolean', { allowNull: true }),
  purpose: attr('string'),
  copyright: attr('string'),
  extensible: attr('boolean', { allowNull: true }),
  compose: belongsTo('value-set-compose', { async: false }),
  expansion: belongsTo('value-set-expansion', { async: false })
});