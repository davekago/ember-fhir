import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {identifier: { embedded: 'always' }, quantity: { embedded: 'always' }
  }
});