import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  summary: belongsTo('codeable-concept', { async: false }),
  assessment: hasMany('reference', { async: true })
});