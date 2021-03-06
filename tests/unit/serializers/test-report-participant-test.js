import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-report-participant', 'Unit | Serializer | TestReport_Participant', {
  needs: [
    'serializer:test-report-participant',
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