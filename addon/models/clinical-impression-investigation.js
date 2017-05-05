import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  code: belongsTo('codeable-concept', { async: false }),
  item: hasMany('reference', { async: true })
});