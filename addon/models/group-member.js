import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  entity: belongsTo('reference', { async: false }),
  period: belongsTo('period', { async: false }),
  inactive: attr('boolean', { allowNull: true })
});