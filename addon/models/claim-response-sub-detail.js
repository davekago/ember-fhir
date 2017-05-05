import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  sequenceLinkId: attr('number'),
  noteNumber: attr(),
  adjudication: hasMany('claim-response-adjudication', { async: true })
});