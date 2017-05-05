import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr, hasMany } = DS;

export default Element.extend({
  type_: attr('string'),
  name: attr('string'),
  contact: hasMany('contact-detail', { async: true })
});