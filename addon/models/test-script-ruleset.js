import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  resource: belongsTo('reference', { async: false }),
  rule: hasMany('test-script-rule-1', { async: true })
});