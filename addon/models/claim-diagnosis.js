import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  sequence: attr('number'),
  diagnosisCodeableConcept: belongsTo('codeable-concept', { async: false }),
  diagnosisReference: belongsTo('reference', { async: false }),
  type_: hasMany('codeable-concept', { async: true }),
  packageCode: belongsTo('codeable-concept', { async: false })
});