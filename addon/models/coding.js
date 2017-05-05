import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr } = DS;

export default Element.extend({
  system: attr('string'),
  version: attr('string'),
  code: attr('string'),
  display: attr('string'),
  userSelected: attr('boolean', { allowNull: true })
});