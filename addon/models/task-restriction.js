import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  repetitions: attr('number'),
  period: belongsTo('period', { async: false }),
  recipient: hasMany('reference', { async: true })
});