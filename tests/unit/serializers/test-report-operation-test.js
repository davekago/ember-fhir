import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-report-operation', 'Unit | Serializer | TestReport_Operation', {
  needs: [
    'serializer:test-report-operation',
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