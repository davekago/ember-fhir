import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr, belongsTo } = DS;

export default Element.extend({
  authorReference: belongsTo('reference', { async: false }),
  authorString: attr('string'),
  time: attr('date'),
  text: attr('string')
});