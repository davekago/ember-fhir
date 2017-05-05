import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    container_: { embedded: 'always' },
    content: { embedded: 'always' },
    batch: { embedded: 'always' }
  }
});