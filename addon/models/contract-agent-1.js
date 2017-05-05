import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  actor: belongsTo('reference', { async: false }),
  role: hasMany('codeable-concept', { async: true })
});