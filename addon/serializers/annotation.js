import ElementSerializer from 'ember-fhir/serializers/element';

export default ElementSerializer.extend({
  attrs: {authorReference: { embedded: 'always' }
  }
});