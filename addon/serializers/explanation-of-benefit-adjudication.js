import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    category: { embedded: 'always' },
    reason: { embedded: 'always' },
    amount: { embedded: 'always' }
  }
});