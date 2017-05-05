import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr } = DS;

export default Element.extend({
  contentType: attr('string'),
  language: attr('string'),
  data_: attr('string'),
  url: attr('string'),
  size: attr('number'),
  hash: attr('string'),
  title: attr('string'),
  creation: attr('date')
});