import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  date: attr('date'),
  detail: belongsTo('reference', { async: false }),
  reported: attr('boolean', { allowNull: true })
});