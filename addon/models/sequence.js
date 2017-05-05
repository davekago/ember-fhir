import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  type_: attr('string'),
  coordinateSystem: attr('number'),
  patient: belongsTo('reference', { async: false }),
  specimen: belongsTo('reference', { async: false }),
  device: belongsTo('reference', { async: false }),
  performer: belongsTo('reference', { async: false }),
  quantity: belongsTo('quantity', { async: false }),
  referenceSeq: belongsTo('sequence-reference-seq', { async: false }),
  variant: hasMany('sequence-variant', { async: true }),
  observedSeq: attr('string'),
  quality: hasMany('sequence-quality', { async: true }),
  readCoverage: attr('number'),
  repository: hasMany('sequence-repository', { async: true }),
  pointer: hasMany('reference', { async: true })
});