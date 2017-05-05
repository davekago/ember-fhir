import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  name: attr('string'),
  use: attr('string'),
  min: attr('number'),
  max: attr('string'),
  documentation: attr('string'),
  type_: attr('string'),
  searchType: attr('string'),
  profile: belongsTo('reference', { async: false }),
  binding: belongsTo('operation-definition-binding', { async: false }),
  part: hasMany('operation-definition-parameter', { async: true })
});