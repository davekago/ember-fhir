import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    endpoint: { embedded: 'always' },
    supportedMessage: { embedded: 'always' },
    event: { embedded: 'always' }
  }
});