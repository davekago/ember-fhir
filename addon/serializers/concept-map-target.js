import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {dependsOn: { embedded: 'always' }, product: { embedded: 'always' }
  }
});