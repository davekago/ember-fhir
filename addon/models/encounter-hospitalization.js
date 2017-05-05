import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  preAdmissionIdentifier: belongsTo('identifier', { async: false }),
  origin: belongsTo('reference', { async: false }),
  admitSource: belongsTo('codeable-concept', { async: false }),
  reAdmission: belongsTo('codeable-concept', { async: false }),
  dietPreference: hasMany('codeable-concept', { async: true }),
  specialCourtesy: hasMany('codeable-concept', { async: true }),
  specialArrangement: hasMany('codeable-concept', { async: true }),
  destination: belongsTo('reference', { async: false }),
  dischargeDisposition: belongsTo('codeable-concept', { async: false })
});