import { moduleForModel, test } from 'ember-qunit';

moduleForModel('consent-actor-1', 'Unit | Serializer | Consent_Actor1', {
  needs: [
    'serializer:consent-actor-1',
    'model:codeable-concept',
    'model:reference',
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});