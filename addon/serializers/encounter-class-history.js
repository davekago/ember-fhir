import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {class: { embedded: 'always' }, period: { embedded: 'always' }
  }
});