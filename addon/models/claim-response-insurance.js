import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  sequence: attr('number'),
  focal: attr('boolean', { allowNull: true }),
  coverage: belongsTo('reference', { async: false }),
  businessArrangement: attr('string'),
  preAuthRef: attr(),
  claimResponse: belongsTo('reference', { async: false })
});