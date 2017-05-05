import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr, belongsTo } = DS;

export default Element.extend({
  meta: belongsTo('meta', { async: false }),
  implicitRules: attr('string'),
  language: attr('string')
});