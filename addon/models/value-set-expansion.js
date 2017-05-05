import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  identifier: attr('string'),
  timestamp: attr('date'),
  total: attr('number'),
  offset: attr('number'),
  parameter: hasMany('value-set-parameter', { async: true }),
  contains: hasMany('value-set-contains', { async: true })
});