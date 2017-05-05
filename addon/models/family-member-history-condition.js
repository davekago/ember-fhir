import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  code: belongsTo('codeable-concept', { async: false }),
  outcome: belongsTo('codeable-concept', { async: false }),
  onsetAge: belongsTo('age', { async: false }),
  onsetRange: belongsTo('range', { async: false }),
  onsetPeriod: belongsTo('period', { async: false }),
  onsetString: attr('string'),
  note: hasMany('annotation', { async: true })
});