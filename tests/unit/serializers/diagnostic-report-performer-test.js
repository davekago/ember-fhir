import { moduleForModel, test } from 'ember-qunit';

moduleForModel('diagnostic-report-performer', 'Unit | Serializer | DiagnosticReport_Performer', {
  needs: [
    'serializer:diagnostic-report-performer',
    'model:codeable-concept',
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