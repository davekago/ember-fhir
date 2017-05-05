import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-report-setup', 'Unit | Serializer | TestReport_Setup', {
  needs: [
    'serializer:test-report-setup',
    'model:test-report-action',
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