import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  type_: attr('string'),
  profile: belongsTo('reference', { async: false }),
  documentation: attr('string'),
  interaction: hasMany('capability-statement-interaction', { async: true }),
  versioning: attr('string'),
  readHistory: attr('boolean', { allowNull: true }),
  updateCreate: attr('boolean', { allowNull: true }),
  conditionalCreate: attr('boolean', { allowNull: true }),
  conditionalRead: attr('string'),
  conditionalUpdate: attr('boolean', { allowNull: true }),
  conditionalDelete: attr('string'),
  referencePolicy: attr(),
  searchInclude: attr(),
  searchRevInclude: attr(),
  searchParam: hasMany('capability-statement-search-param', { async: true })
});