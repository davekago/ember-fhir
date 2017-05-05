import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    substance: { embedded: 'always' },
    manifestation: { embedded: 'always' },
    exposureRoute: { embedded: 'always' },
    note: { embedded: 'always' }
  }
});