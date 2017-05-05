import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  uid: attr('string'),
  imagingStudy: belongsTo('reference', { async: false }),
  endpoint: hasMany('reference', { async: true }),
  series: hasMany('imaging-manifest-series', { async: true })
});