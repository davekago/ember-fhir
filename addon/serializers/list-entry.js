import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {flag: { embedded: 'always' }, item: { embedded: 'always' }
  }
});