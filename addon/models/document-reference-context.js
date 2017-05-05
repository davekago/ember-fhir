import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  encounter: belongsTo('reference', { async: false }),
  event: hasMany('codeable-concept', { async: true }),
  period: belongsTo('period', { async: false }),
  facilityType: belongsTo('codeable-concept', { async: false }),
  practiceSetting: belongsTo('codeable-concept', { async: false }),
  sourcePatientInfo: belongsTo('reference', { async: false }),
  related: hasMany('document-reference-related', { async: true })
});