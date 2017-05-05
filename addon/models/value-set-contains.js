import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  system: attr('string'),
  abstract: attr('boolean', { allowNull: true }),
  inactive: attr('boolean', { allowNull: true }),
  version: attr('string'),
  code: attr('string'),
  display: attr('string'),
  designation: hasMany('value-set-designation', { async: true }),
  contains: hasMany('value-set-contains', { async: true })
});