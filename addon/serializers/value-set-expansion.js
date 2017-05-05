import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {parameter: { embedded: 'always' }, contains: { embedded: 'always' }
  }
});