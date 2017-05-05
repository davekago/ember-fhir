import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  chromosome: belongsTo('codeable-concept', { async: false }),
  genomeBuild: attr('string'),
  referenceSeqId: belongsTo('codeable-concept', { async: false }),
  referenceSeqPointer: belongsTo('reference', { async: false }),
  referenceSeqString: attr('string'),
  strand: attr('number'),
  windowStart: attr('number'),
  windowEnd: attr('number')
});