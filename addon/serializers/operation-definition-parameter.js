import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    profile: { embedded: 'always' },
    binding: { embedded: 'always' },
    part: { embedded: 'always' }
  }
});