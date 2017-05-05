import { moduleForModel, test } from 'ember-qunit';

moduleForModel('diagnostic-report', 'Unit | Serializer | DiagnosticReport', {
  needs: [
    'serializer:diagnostic-report',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:diagnostic-report-performer',
    'model:diagnostic-report-image',
    'model:attachment',
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