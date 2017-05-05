import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    relationship: { embedded: 'always' },
    name: { embedded: 'always' },
    telecom: { embedded: 'always' },
    address: { embedded: 'always' },
    organization: { embedded: 'always' },
    period: { embedded: 'always' }
  }
});