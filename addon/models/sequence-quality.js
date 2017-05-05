import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  type_: attr('string'),
  standardSequence: belongsTo('codeable-concept', { async: false }),
  start: attr('number'),
  end: attr('number'),
  score: belongsTo('quantity', { async: false }),
  method: belongsTo('codeable-concept', { async: false }),
  truthTP: attr('number'),
  queryTP: attr('number'),
  truthFN: attr('number'),
  queryFP: attr('number'),
  gtFP: attr('number'),
  precision: attr('number'),
  recall: attr('number'),
  fScore: attr('number')
});