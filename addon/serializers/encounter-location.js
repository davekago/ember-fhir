import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {location: { embedded: 'always' }, period: { embedded: 'always' }
  }
});