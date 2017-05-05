import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { hasMany } = DS;

export default BackboneElement.extend({
  element: hasMany('element-definition', { async: true, inverse: null })
});