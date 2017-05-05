import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr, belongsTo } = DS;

export default Element.extend({
  event: attr(),
  repeat: belongsTo('timing-repeat', { async: false }),
  code: belongsTo('codeable-concept', { async: false })
});