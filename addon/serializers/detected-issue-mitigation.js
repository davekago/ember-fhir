import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {action: { embedded: 'always' }, author: { embedded: 'always' }
  }
});