import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: belongsTo('identifier', { async: false }),
  basedOn: hasMany('reference', { async: true }),
  partOf: hasMany('reference', { async: true }),
  status: attr('string'),
  patient: belongsTo('reference', { async: false }),
  type_: belongsTo('codeable-concept', { async: false }),
  suppliedItem: belongsTo('supply-delivery-supplied-item', { async: false }),
  occurrenceDateTime: attr('date'),
  occurrencePeriod: belongsTo('period', { async: false }),
  occurrenceTiming: belongsTo('timing', { async: false }),
  supplier: belongsTo('reference', { async: false }),
  destination: belongsTo('reference', { async: false }),
  receiver: hasMany('reference', { async: true })
});