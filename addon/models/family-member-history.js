import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  definition: hasMany('reference', { async: true }),
  status: attr('string'),
  notDone: attr('boolean', { allowNull: true }),
  notDoneReason: belongsTo('codeable-concept', { async: false }),
  patient: belongsTo('reference', { async: false }),
  date: attr('date'),
  name: attr('string'),
  relationship: belongsTo('codeable-concept', { async: false }),
  gender: attr('string'),
  bornPeriod: belongsTo('period', { async: false }),
  bornDate: attr('date'),
  bornString: attr('string'),
  ageAge: belongsTo('age', { async: false }),
  ageRange: belongsTo('range', { async: false }),
  ageString: attr('string'),
  estimatedAge: attr('boolean', { allowNull: true }),
  deceasedBoolean: attr('boolean', { allowNull: true }),
  deceasedAge: belongsTo('age', { async: false }),
  deceasedRange: belongsTo('range', { async: false }),
  deceasedDate: attr('date'),
  deceasedString: attr('string'),
  reasonCode: hasMany('codeable-concept', { async: true }),
  reasonReference: hasMany('reference', { async: true }),
  note: hasMany('annotation', { async: true }),
  condition: hasMany('family-member-history-condition', { async: true })
});