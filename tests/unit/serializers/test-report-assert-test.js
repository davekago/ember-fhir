import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-report-assert', 'Unit | Serializer | TestReport_Assert', {
  needs: [
    'serializer:test-report-assert',
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