import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    period: { embedded: 'always' },
    actor: { embedded: 'always' },
    action: { embedded: 'always' },
    securityLabel: { embedded: 'always' },
    purpose: { embedded: 'always' },
    class: { embedded: 'always' },
    code: { embedded: 'always' },
    dataPeriod: { embedded: 'always' },
    data_: { embedded: 'always' }
  }
});