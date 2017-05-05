import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  type_: attr('string'),
  value: attr('string'),
  preferred: attr('boolean', { allowNull: true }),
  comment: attr('string'),
  period: belongsTo('period', { async: false })
});