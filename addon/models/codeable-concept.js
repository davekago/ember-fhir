import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr, hasMany } = DS;

export default Element.extend({
  coding: hasMany('coding', { async: true }),
  text: attr('string')
});