import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  lockedDate: attr('date'),
  inactive: attr('boolean', { allowNull: true }),
  include: hasMany('value-set-include', { async: true }),
  exclude: hasMany('value-set-include', { async: true })
});