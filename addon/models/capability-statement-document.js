import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  mode: attr('string'),
  documentation: attr('string'),
  profile: belongsTo('reference', { async: false })
});