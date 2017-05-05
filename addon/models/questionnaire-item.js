import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  linkId: attr('string'),
  definition: attr('string'),
  code: hasMany('coding', { async: true }),
  prefix: attr('string'),
  text: attr('string'),
  type_: attr('string'),
  enableWhen: hasMany('questionnaire-enable-when', { async: true }),
  required: attr('boolean', { allowNull: true }),
  repeats: attr('boolean', { allowNull: true }),
  readOnly: attr('boolean', { allowNull: true }),
  maxLength: attr('number'),
  options: belongsTo('reference', { async: false }),
  option: hasMany('questionnaire-option', { async: true }),
  initialBoolean: attr('boolean', { allowNull: true }),
  initialDecimal: attr('number'),
  initialInteger: attr('number'),
  initialDate: attr('date'),
  initialDateTime: attr('date'),
  initialTime: attr('date'),
  initialString: attr('string'),
  initialUri: attr('string'),
  initialAttachment: belongsTo('attachment', { async: false }),
  initialCoding: belongsTo('coding', { async: false }),
  initialQuantity: belongsTo('quantity', { async: false }),
  initialReference: belongsTo('reference', { async: false }),
  item: hasMany('questionnaire-item', { async: true })
});