import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {attachment: { embedded: 'always' }, format: { embedded: 'always' }
  }
});