import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  ruleId: attr('string'),
  param: hasMany('test-script-param-2', { async: true })
});