import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    offsetDuration: { embedded: 'always' },
    offsetRange: { embedded: 'always' }
  }
});