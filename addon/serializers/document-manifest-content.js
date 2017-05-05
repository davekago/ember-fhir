import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {pAttachment: { embedded: 'always' }, pReference: { embedded: 'always' }
  }
});