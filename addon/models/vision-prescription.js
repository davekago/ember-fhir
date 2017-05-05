import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  patient: belongsTo('reference', { async: false }),
  encounter: belongsTo('reference', { async: false }),
  dateWritten: attr('date'),
  prescriber: belongsTo('reference', { async: false }),
  reasonCodeableConcept: belongsTo('codeable-concept', { async: false }),
  reasonReference: belongsTo('reference', { async: false }),
  dispense: hasMany('vision-prescription-dispense', { async: true })
});