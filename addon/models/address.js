import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr, belongsTo } = DS;

export default Element.extend({
  use: attr('string'),
  type_: attr('string'),
  text: attr('string'),
  line: attr(),
  city: attr('string'),
  district: attr('string'),
  state: attr('string'),
  postalCode: attr('string'),
  country: attr('string'),
  period: belongsTo('period', { async: false })
});