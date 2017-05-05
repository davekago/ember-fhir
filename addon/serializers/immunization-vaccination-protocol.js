import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    authority: { embedded: 'always' },
    targetDisease: { embedded: 'always' },
    doseStatus: { embedded: 'always' },
    doseStatusReason: { embedded: 'always' }
  }
});