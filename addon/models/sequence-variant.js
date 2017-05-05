import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  start: attr('number'),
  end: attr('number'),
  observedAllele: attr('string'),
  referenceAllele: attr('string'),
  cigar: attr('string'),
  variantPointer: belongsTo('reference', { async: false })
});