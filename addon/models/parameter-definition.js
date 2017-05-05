import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr, belongsTo } = DS;

export default Element.extend({
  name: attr('string'),
  use: attr('string'),
  min: attr('number'),
  max: attr('string'),
  documentation: attr('string'),
  type_: attr('string'),
  profile: belongsTo('reference', { async: false })
});