import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  actionId: attr('string'),
  relationship: attr('string'),
  offsetDuration: belongsTo('duration', { async: false }),
  offsetRange: belongsTo('range', { async: false })
});