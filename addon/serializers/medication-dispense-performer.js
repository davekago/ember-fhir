import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {actor: { embedded: 'always' }, onBehalfOf: { embedded: 'always' }
  }
});