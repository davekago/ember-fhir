import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    modality: { embedded: 'always' },
    endpoint: { embedded: 'always' },
    bodySite: { embedded: 'always' },
    laterality: { embedded: 'always' },
    performer: { embedded: 'always' },
    instance: { embedded: 'always' }
  }
});