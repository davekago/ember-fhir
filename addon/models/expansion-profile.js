import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  url: attr('string'),
  identifier: belongsTo('identifier', { async: false }),
  version: attr('string'),
  name: attr('string'),
  status: attr('string'),
  experimental: attr('boolean', { allowNull: true }),
  date: attr('date'),
  publisher: attr('string'),
  contact: hasMany('contact-detail', { async: true }),
  description: attr('string'),
  useContext: hasMany('usage-context', { async: true }),
  jurisdiction: hasMany('codeable-concept', { async: true }),
  fixedVersion: hasMany('expansion-profile-fixed-version', { async: true }),
  excludedSystem: belongsTo('expansion-profile-excluded-system', { async: false }),
  includeDesignations: attr('boolean', { allowNull: true }),
  designation: belongsTo('expansion-profile-designation', { async: false }),
  includeDefinition: attr('boolean', { allowNull: true }),
  activeOnly: attr('boolean', { allowNull: true }),
  excludeNested: attr('boolean', { allowNull: true }),
  excludeNotForUI: attr('boolean', { allowNull: true }),
  excludePostCoordinated: attr('boolean', { allowNull: true }),
  displayLanguage: attr('string'),
  limitedExpansion: attr('boolean', { allowNull: true })
});