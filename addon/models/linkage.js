import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  active: attr('boolean', { allowNull: true }),
  author: belongsTo('reference', { async: false }),
  item: hasMany('linkage-item', { async: true })
});