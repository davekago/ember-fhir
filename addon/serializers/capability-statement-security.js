import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {service: { embedded: 'always' }, certificate: { embedded: 'always' }
  }
});