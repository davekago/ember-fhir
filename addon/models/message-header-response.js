import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  identifier: attr('string'),
  code: attr('string'),
  details: belongsTo('reference', { async: false })
});