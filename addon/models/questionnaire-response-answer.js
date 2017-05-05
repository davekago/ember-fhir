import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  valueBoolean: attr('boolean', { allowNull: true }),
  valueDecimal: attr('number'),
  valueInteger: attr('number'),
  valueDate: attr('date'),
  valueDateTime: attr('date'),
  valueTime: attr('date'),
  valueString: attr('string'),
  valueUri: attr('string'),
  valueAttachment: belongsTo('attachment', { async: false }),
  valueCoding: belongsTo('coding', { async: false }),
  valueQuantity: belongsTo('quantity', { async: false }),
  valueReference: belongsTo('reference', { async: false }),
  item: hasMany('questionnaire-response-item', { async: true })
});