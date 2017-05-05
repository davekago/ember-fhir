import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr, belongsTo } = DS;

export default Element.extend({
  use: attr('string'),
  text: attr('string'),
  family: attr('string'),
  given: attr(),
  prefix: attr(),
  suffix: attr(),
  period: belongsTo('period', { async: false })
});