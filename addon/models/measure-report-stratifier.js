import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  identifier: belongsTo('identifier', { async: false }),
  stratum: hasMany('measure-report-stratum', { async: true })
});