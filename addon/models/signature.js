import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr, belongsTo, hasMany } = DS;

export default Element.extend({
  type_: hasMany('coding', { async: true }),
  when: attr('string'),
  whoUri: attr('string'),
  whoReference: belongsTo('reference', { async: false }),
  onBehalfOfUri: attr('string'),
  onBehalfOfReference: belongsTo('reference', { async: false }),
  contentType: attr('string'),
  blob: attr('string')
});