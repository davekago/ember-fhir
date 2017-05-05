import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-metadata', 'Unit | Serializer | TestScript_Metadata', {
  needs: [
    'serializer:test-script-metadata',
    'model:test-script-link',
    'model:test-script-capability',
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