import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  resource: belongsTo('reference', { async: false }),
  param: hasMany('test-script-param', { async: true })
});