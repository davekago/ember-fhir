import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  uid: attr('string'),
  endpoint: hasMany('reference', { async: true }),
  instance: hasMany('imaging-manifest-instance', { async: true })
});