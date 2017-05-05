import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo } = DS;

export default DomainResource.extend({
  identifier: belongsTo('identifier', { async: false }),
  status: attr('string'),
  period: belongsTo('period', { async: false }),
  study: belongsTo('reference', { async: false }),
  individual: belongsTo('reference', { async: false }),
  assignedArm: attr('string'),
  actualArm: attr('string'),
  consent: belongsTo('reference', { async: false })
});