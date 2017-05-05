import { moduleForModel, test } from 'ember-qunit';

moduleForModel('consent-actor', 'Unit | Serializer | Consent_Actor', {
  needs: [
    'serializer:consent-actor',
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