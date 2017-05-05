import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  uid: attr('string'),
  number: attr('number'),
  modality: belongsTo('coding', { async: false }),
  description: attr('string'),
  numberOfInstances: attr('number'),
  availability: attr('string'),
  endpoint: hasMany('reference', { async: true }),
  bodySite: belongsTo('coding', { async: false }),
  laterality: belongsTo('coding', { async: false }),
  started: attr('date'),
  performer: hasMany('reference', { async: true }),
  instance: hasMany('imaging-study-instance', { async: true })
});