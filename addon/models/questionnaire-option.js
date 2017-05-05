import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  valueInteger: attr('number'),
  valueDate: attr('date'),
  valueTime: attr('date'),
  valueString: attr('string'),
  valueCoding: belongsTo('coding', { async: false })
});