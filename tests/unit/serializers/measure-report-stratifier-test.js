import { moduleForModel, test } from 'ember-qunit';

moduleForModel('measure-report-stratifier', 'Unit | Serializer | MeasureReport_Stratifier', {
  needs: [
    'serializer:measure-report-stratifier',
    'model:identifier',
    'model:measure-report-stratum',
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