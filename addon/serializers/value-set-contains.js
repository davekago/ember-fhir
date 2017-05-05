import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {designation: { embedded: 'always' }, contains: { embedded: 'always' }
  }
});