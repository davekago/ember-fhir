import { moduleForModel, test } from 'ember-qunit';

moduleForModel('diagnostic-report-image', 'Unit | Serializer | DiagnosticReport_Image', {
  needs: [
    'serializer:diagnostic-report-image',
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