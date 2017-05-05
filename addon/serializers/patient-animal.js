import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    species: { embedded: 'always' },
    breed: { embedded: 'always' },
    genderStatus: { embedded: 'always' }
  }
});