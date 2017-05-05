import ElementSerializer from 'ember-fhir/serializers/element';

export default ElementSerializer.extend({
  attrs: {security: { embedded: 'always' }, tag: { embedded: 'always' }
  }
});