import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  code: attr('string'),
  profile: belongsTo('reference', { async: false }),
  min: attr('number'),
  max: attr('string')
});