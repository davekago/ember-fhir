import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {specType: { embedded: 'always' }, componentId: { embedded: 'always' }
  }
});