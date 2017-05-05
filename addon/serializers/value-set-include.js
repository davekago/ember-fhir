import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {concept: { embedded: 'always' }, filter: { embedded: 'always' }
  }
});