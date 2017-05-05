import { moduleForModel, test } from 'ember-qunit';

moduleForModel('measure-report-stratum', 'Unit | Serializer | MeasureReport_Stratum', {
  needs: [
    'serializer:measure-report-stratum',
    'model:measure-report-population-1',
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