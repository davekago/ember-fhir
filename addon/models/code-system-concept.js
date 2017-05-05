import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  code: attr('string'),
  display: attr('string'),
  definition: attr('string'),
  designation: hasMany('code-system-designation', { async: true }),
  property: hasMany('code-system-property-1', { async: true }),
  concept: hasMany('code-system-concept', { async: true })
});