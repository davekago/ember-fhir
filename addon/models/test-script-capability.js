import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  required: attr('boolean', { allowNull: true }),
  validated: attr('boolean', { allowNull: true }),
  description: attr('string'),
  origin: attr(),
  destination: attr('number'),
  link: attr(),
  capabilities: belongsTo('reference', { async: false })
});