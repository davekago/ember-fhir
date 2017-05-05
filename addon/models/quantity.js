import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr } = DS;

export default Element.extend({
  value: attr('number'),
  comparator: attr('string'),
  unit: attr('string'),
  system: attr('string'),
  code: attr('string')
});