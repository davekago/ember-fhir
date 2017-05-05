import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  doseSequence: attr('number'),
  description: attr('string'),
  authority: belongsTo('reference', { async: false }),
  series: attr('string')
});