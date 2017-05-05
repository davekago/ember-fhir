import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {modifier: { embedded: 'always' }, amount: { embedded: 'always' }
  }
});