import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  flag: belongsTo('codeable-concept', { async: false }),
  deleted: attr('boolean', { allowNull: true }),
  date: attr('date'),
  item: belongsTo('reference', { async: false })
});