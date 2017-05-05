import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {party: { embedded: 'always' }, period: { embedded: 'always' }
  }
});