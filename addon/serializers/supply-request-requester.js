import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {agent: { embedded: 'always' }, onBehalfOf: { embedded: 'always' }
  }
});