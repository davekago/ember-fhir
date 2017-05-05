import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { hasMany } = DS;

export default DomainResource.extend({
issue: hasMany('operation-outcome-issue', { async: true })
});