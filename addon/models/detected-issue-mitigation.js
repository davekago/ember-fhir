import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  action: belongsTo('codeable-concept', { async: false }),
  date: attr('date'),
  author: belongsTo('reference', { async: false })
});