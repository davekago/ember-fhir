import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  container_: belongsTo('codeable-concept', { async: false }),
  content: hasMany('medication-content', { async: true }),
  batch: hasMany('medication-batch', { async: true })
});