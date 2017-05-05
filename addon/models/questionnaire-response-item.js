import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  linkId: attr('string'),
  definition: attr('string'),
  text: attr('string'),
  subject: belongsTo('reference', { async: false }),
  answer: hasMany('questionnaire-response-answer', { async: true }),
  item: hasMany('questionnaire-response-item', { async: true })
});