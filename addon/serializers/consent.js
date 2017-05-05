import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    category: { embedded: 'always' },
    patient: { embedded: 'always' },
    period: { embedded: 'always' },
    consentingParty: { embedded: 'always' },
    actor: { embedded: 'always' },
    action: { embedded: 'always' },
    organization: { embedded: 'always' },
    sourceAttachment: { embedded: 'always' },
    sourceIdentifier: { embedded: 'always' },
    sourceReference: { embedded: 'always' },
    policy: { embedded: 'always' },
    securityLabel: { embedded: 'always' },
    purpose: { embedded: 'always' },
    dataPeriod: { embedded: 'always' },
    data_: { embedded: 'always' },
    except: { embedded: 'always' }
  }
});