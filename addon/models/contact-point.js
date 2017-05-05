import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr, belongsTo } = DS;

export default Element.extend({
  system: attr('string'),
  value: attr('string'),
  use: attr('string'),
  rank: attr('number'),
  period: belongsTo('period', { async: false })
});