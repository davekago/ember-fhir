import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  example: attr('boolean', { allowNull: true }),
  name: attr('string'),
  description: attr('string'),
  acronym: attr('string'),
  sourceUri: attr('string'),
  sourceReference: belongsTo('reference', { async: false }),
  exampleFor: belongsTo('reference', { async: false })
});