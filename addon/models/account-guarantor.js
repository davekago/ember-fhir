import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  party: belongsTo('reference', { async: false }),
  onHold: attr('boolean', { allowNull: true }),
  period: belongsTo('period', { async: false })
});