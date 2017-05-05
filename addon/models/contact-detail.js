import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr, hasMany } = DS;

export default Element.extend({
  name: attr('string'),
  telecom: hasMany('contact-point', { async: true })
});