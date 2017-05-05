import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: { entity: { embedded: 'always' }, period: { embedded: 'always' }
  }
});