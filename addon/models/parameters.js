import DS from 'ember-data';
import Resource from 'ember-fhir/models/resource';

const { hasMany } = DS;

export default Resource.extend({
  parameter: hasMany('parameters-parameter', { async: true, inverse: null })
});