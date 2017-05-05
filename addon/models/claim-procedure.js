import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  sequence: attr('number'),
  date: attr('date'),
  procedureCodeableConcept: belongsTo('codeable-concept', { async: false }),
  procedureReference: belongsTo('reference', { async: false })
});