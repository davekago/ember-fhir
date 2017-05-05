import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  code: attr('string'),
  display: attr('string'),
  designation: hasMany('value-set-designation', { async: true })
});