import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    profile: { embedded: 'always' },
    interaction: { embedded: 'always' },
    searchParam: { embedded: 'always' }
  }
});