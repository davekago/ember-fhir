import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  title: attr('string'),
  code: belongsTo('codeable-concept', { async: false }),
  text: belongsTo('narrative', { async: false }),
  mode: attr('string'),
  orderedBy: belongsTo('codeable-concept', { async: false }),
  entry: hasMany('reference', { async: true }),
  emptyReason: belongsTo('codeable-concept', { async: false }),
  section: hasMany('composition-section', { async: true })
});