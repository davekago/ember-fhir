import ElementSerializer from 'ember-fhir/serializers/element';

export default ElementSerializer.extend({
  attrs: {codeFilter: { embedded: 'always' }, dateFilter: { embedded: 'always' }
  }
});