import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {link: { embedded: 'always' }, capability: { embedded: 'always' }
  }
});