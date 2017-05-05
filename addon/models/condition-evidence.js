import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { hasMany } = DS;

export default BackboneElement.extend({
  code: hasMany('codeable-concept', { async: true }),
  detail: hasMany('reference', { async: true })
});