import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  code: attr('string'),
  valueCode: attr('string'),
  valueCoding: belongsTo('coding', { async: false }),
  valueString: attr('string'),
  valueInteger: attr('number'),
  valueBoolean: attr('boolean', { allowNull: true }),
  valueDateTime: attr('date')
});