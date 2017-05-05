import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    type_: { embedded: 'always' },
    request: { embedded: 'always' },
    response: { embedded: 'always' },
    submitter: { embedded: 'always' },
    payee: { embedded: 'always' },
    amount: { embedded: 'always' }
  }
});