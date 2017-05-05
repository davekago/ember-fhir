import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr, belongsTo } = DS;

export default Element.extend({
  origin: belongsTo('quantity', { async: false }),
  period: attr('number'),
  factor: attr('number'),
  lowerLimit: attr('number'),
  upperLimit: attr('number'),
  dimensions: attr('number'),
  data_: attr('string')
});