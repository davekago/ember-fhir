import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  url: attr('string'),
  identifier: belongsTo('identifier', { async: false }),
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
  caseSensitive: attr('boolean', { allowNull: true }),
  valueSet: attr('string'),
  hierarchyMeaning: attr('string'),
  compositional: attr('boolean', { allowNull: true }),
  versionNeeded: attr('boolean', { allowNull: true }),
  content: attr('string'),
  count: attr('number'),
  filter: hasMany('code-system-filter', { async: true }),
  property: hasMany('code-system-property', { async: true }),
  concept: hasMany('code-system-concept', { async: true })
});