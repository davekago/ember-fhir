import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr, belongsTo } = DS;

export default Element.extend({
  type_: attr('string'),
  display: attr('string'),
  citation: attr('string'),
  url: attr('string'),
  document: belongsTo('attachment', { async: false }),
  resource: belongsTo('reference', { async: false })
});