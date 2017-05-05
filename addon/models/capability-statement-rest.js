import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  mode: attr('string'),
  documentation: attr('string'),
  security: belongsTo('capability-statement-security', { async: false }),
  resource: hasMany('capability-statement-resource', { async: true }),
  interaction: hasMany('capability-statement-interaction-1', { async: true }),
  searchParam: hasMany('capability-statement-search-param', { async: true }),
  operation: hasMany('capability-statement-operation', { async: true }),
  compartment: attr()
});