import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-report-test', 'Unit | Serializer | TestReport_Test', {
  needs: [
    'serializer:test-report-test',
    'model:test-report-action-1',
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