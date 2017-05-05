import { moduleForModel, test } from 'ember-qunit';

moduleForModel('condition-evidence', 'Unit | Serializer | Condition_Evidence', {
  needs: [
    'serializer:condition-evidence',
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