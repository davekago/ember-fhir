import { moduleForModel, test } from 'ember-qunit';

moduleForModel('consent-except', 'Unit | Serializer | Consent_Except', {
  needs: [
    'serializer:consent-except',
    'model:period',
    'model:consent-actor-1',
    'model:codeable-concept',
    'model:coding',
    'model:consent-data-1',
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