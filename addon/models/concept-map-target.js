import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  code: attr('string'),
  display: attr('string'),
  equivalence: attr('string'),
  comment: attr('string'),
  dependsOn: hasMany('concept-map-depends-on', { async: true }),
  product: hasMany('concept-map-depends-on', { async: true })
});