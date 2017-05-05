import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    encounter: { embedded: 'always' },
    event: { embedded: 'always' },
    period: { embedded: 'always' },
    facilityType: { embedded: 'always' },
    practiceSetting: { embedded: 'always' },
    sourcePatientInfo: { embedded: 'always' },
    related: { embedded: 'always' }
  }
});