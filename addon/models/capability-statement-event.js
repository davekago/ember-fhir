import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  code: belongsTo('coding', { async: false }),
  category: attr('string'),
  mode: attr('string'),
  focus: attr('string'),
  request: belongsTo('reference', { async: false }),
  response: belongsTo('reference', { async: false }),
  documentation: attr('string')
});