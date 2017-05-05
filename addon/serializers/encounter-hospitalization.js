import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    preAdmissionIdentifier: { embedded: 'always' },
    origin: { embedded: 'always' },
    admitSource: { embedded: 'always' },
    reAdmission: { embedded: 'always' },
    dietPreference: { embedded: 'always' },
    specialCourtesy: { embedded: 'always' },
    specialArrangement: { embedded: 'always' },
    destination: { embedded: 'always' },
    dischargeDisposition: { embedded: 'always' }
  }
});