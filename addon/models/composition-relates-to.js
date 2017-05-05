import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  code: attr('string'),
  targetIdentifier: belongsTo('identifier', { async: false }),
  targetReference: belongsTo('reference', { async: false })
});