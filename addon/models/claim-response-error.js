import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  sequenceLinkId: attr('number'),
  detailSequenceLinkId: attr('number'),
  subdetailSequenceLinkId: attr('number'),
  code: belongsTo('codeable-concept', { async: false })
});