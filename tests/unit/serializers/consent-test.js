import { moduleForModel, test } from 'ember-qunit';

moduleForModel('consent', 'Unit | Serializer | Consent', {
  needs: [
    'serializer:consent',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:period',
    'model:consent-actor',
    'model:attachment',
    'model:consent-policy',
    'model:coding',
    'model:consent-data',
    'model:consent-except',
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:consent-datum'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});