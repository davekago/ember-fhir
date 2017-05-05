import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  rulesetId: attr('string'),
  rule: hasMany('test-script-rule-3', { async: true })
});