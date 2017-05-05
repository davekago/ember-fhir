import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr } = DS;

export default Element.extend({
status: attr('string'), div: attr('string')
});