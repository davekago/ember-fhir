import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  substance: belongsTo('codeable-concept', { async: false }),
  manifestation: hasMany('codeable-concept', { async: true }),
  description: attr('string'),
  onset: attr('date'),
  severity: attr('string'),
  exposureRoute: belongsTo('codeable-concept', { async: false }),
  note: hasMany('annotation', { async: true })
});