import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-report-action', 'Unit | Serializer | TestReport_Action', {
  needs: [
    'serializer:test-report-action',
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