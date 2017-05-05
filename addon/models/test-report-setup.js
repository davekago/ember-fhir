import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { hasMany } = DS;

export default BackboneElement.extend({
action: hasMany('test-report-action', { async: true })
});