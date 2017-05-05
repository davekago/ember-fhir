import ElementSerializer from 'ember-fhir/serializers/element';

export default ElementSerializer.extend({
  attrs: {contact: { embedded: 'always' }
  }
});