import ElementSerializer from 'ember-fhir/serializers/element';

export default ElementSerializer.extend({
  attrs: {repeat: { embedded: 'always' }, code: { embedded: 'always' }
  }
});