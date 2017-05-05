import ElementSerializer from 'ember-fhir/serializers/element';

export default ElementSerializer.extend({
  attrs: {document: { embedded: 'always' }, resource: { embedded: 'always' }
  }
});