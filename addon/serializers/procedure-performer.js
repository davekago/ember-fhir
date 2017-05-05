import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    role: { embedded: 'always' },
    actor: { embedded: 'always' },
    onBehalfOf: { embedded: 'always' }
  }
});