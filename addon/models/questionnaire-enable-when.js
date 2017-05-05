import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  question: attr('string'),
  hasAnswer: attr('boolean', { allowNull: true }),
  answerBoolean: attr('boolean', { allowNull: true }),
  answerDecimal: attr('number'),
  answerInteger: attr('number'),
  answerDate: attr('date'),
  answerDateTime: attr('date'),
  answerTime: attr('date'),
  answerString: attr('string'),
  answerUri: attr('string'),
  answerAttachment: belongsTo('attachment', { async: false }),
  answerCoding: belongsTo('coding', { async: false }),
  answerQuantity: belongsTo('quantity', { async: false }),
  answerReference: belongsTo('reference', { async: false })
});