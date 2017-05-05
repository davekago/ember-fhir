import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {role: { embedded: 'always' }, reference: { embedded: 'always' }
  }
});