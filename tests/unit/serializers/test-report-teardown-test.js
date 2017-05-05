import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-report-teardown', 'Unit | Serializer | TestReport_Teardown', {
  needs: [
    'serializer:test-report-teardown',
    'model:test-report-action-2',
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