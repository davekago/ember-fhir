import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  identifier: belongsTo('identifier', { async: false }),
  code: belongsTo('codeable-concept', { async: false }),
  count: attr('number'),
  patients: belongsTo('reference', { async: false })
});