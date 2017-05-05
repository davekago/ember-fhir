import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr, hasMany } = DS;

export default Element.extend({
  versionId: attr('string'),
  lastUpdated: attr('string'),
  profile: attr(),
  security: hasMany('coding', { async: true }),
  tag: hasMany('coding', { async: true })
});