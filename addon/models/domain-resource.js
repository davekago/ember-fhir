import DS from 'ember-data';
import Resource from 'ember-fhir/models/resource';

const { belongsTo, hasMany } = DS;

export default Resource.extend({
  text: belongsTo('narrative', { async: false }),
  contained: hasMany('resource', { async: true }),
  extension: hasMany('extension', { async: true, inverse: null }),
  modifierExtension: hasMany('extension', { async: true, inverse: null })
});