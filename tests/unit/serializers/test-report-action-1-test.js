import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-report-action-1', 'Unit | Serializer | TestReport_Action1', {
  needs: [
    'serializer:test-report-action-1',
    'model:test-report-operation',
    'model:test-report-assert',
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