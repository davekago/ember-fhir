import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: belongsTo('identifier', { async: false }),
  status: attr('string'),
  category: belongsTo('codeable-concept', { async: false }),
  priority: attr('string'),
  orderedItem: belongsTo('supply-request-ordered-item', { async: false }),
  occurrenceDateTime: attr('date'),
  occurrencePeriod: belongsTo('period', { async: false }),
  occurrenceTiming: belongsTo('timing', { async: false }),
  authoredOn: attr('date'),
  requester: belongsTo('supply-request-requester', { async: false }),
  supplier: hasMany('reference', { async: true }),
  reasonCodeableConcept: belongsTo('codeable-concept', { async: false }),
  reasonReference: belongsTo('reference', { async: false }),
  deliverFrom: belongsTo('reference', { async: false }),
  deliverTo: belongsTo('reference', { async: false })
});