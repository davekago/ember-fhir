import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  source: attr('string'),
  title: attr('string'),
  kind: attr('string'),
  type_: attr(),
  package: attr(),
  format: attr('string'),
  page: hasMany('implementation-guide-page', { async: true })
});