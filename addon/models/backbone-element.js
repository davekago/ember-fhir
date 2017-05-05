import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { hasMany } = DS;

export default Element.extend({
  modifierExtension: hasMany('extension', { async: true, inverse: null })
});