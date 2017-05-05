import DS from 'ember-data';
import Resource from 'ember-fhir/models/resource';

const { attr, belongsTo, hasMany } = DS;

export default Resource.extend({
  identifier: belongsTo('identifier', { async: false }),
  type_: attr('string'),
  total: attr('number'),
  link: hasMany('bundle-link', { async: true }),
  entry: hasMany('bundle-entry', { async: true }),
  signature: belongsTo('signature', { async: false })
});