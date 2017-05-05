import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  date: attr('date'),
  type_: belongsTo('codeable-concept', { async: false }),
  locationAddress: belongsTo('address', { async: false }),
  locationReference: belongsTo('reference', { async: false })
});