import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {compartment: { embedded: 'always' }, link: { embedded: 'always' }
  }
});