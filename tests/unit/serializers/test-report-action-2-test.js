import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-report-action-2', 'Unit | Serializer | TestReport_Action2', {
  needs: [
    'serializer:test-report-action-2',
    'model:test-report-operation',
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