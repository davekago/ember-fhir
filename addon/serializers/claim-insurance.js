import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {coverage: { embedded: 'always' }, claimResponse: { embedded: 'always' }
  }
});