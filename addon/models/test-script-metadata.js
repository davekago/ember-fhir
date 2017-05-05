import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { hasMany } = DS;

export default BackboneElement.extend({
  link: hasMany('test-script-link', { async: true }),
  capability: hasMany('test-script-capability', { async: true })
});