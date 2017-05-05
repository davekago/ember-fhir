import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    code: { embedded: 'always' },
    outcome: { embedded: 'always' },
    onsetAge: { embedded: 'always' },
    onsetRange: { embedded: 'always' },
    onsetPeriod: { embedded: 'always' },
    note: { embedded: 'always' }
  }
});