import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  name: attr('string'),
  valueString: attr('string'),
  valueBoolean: attr('boolean', { allowNull: true }),
  valueInteger: attr('number'),
  valueDecimal: attr('number'),
  valueUri: attr('string'),
  valueCode: attr('string')
});