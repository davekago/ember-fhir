import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr, belongsTo } = DS;

export default Element.extend({
  reference: attr('string'),
  identifier: belongsTo('identifier', { async: false }),
  display: attr('string')
});