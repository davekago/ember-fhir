import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  name: attr('string'),
  description: attr('string'),
  action: hasMany('test-script-action-1', { async: true })
});