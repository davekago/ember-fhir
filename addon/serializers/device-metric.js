import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    type_: { embedded: 'always' },
    unit: { embedded: 'always' },
    source: { embedded: 'always' },
    parent: { embedded: 'always' },
    measurementPeriod: { embedded: 'always' },
    calibration: { embedded: 'always' }
  }
});