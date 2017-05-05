import { moduleForModel, test } from 'ember-qunit';

moduleForModel('measure-report-group', 'Unit | Serializer | MeasureReport_Group', {
  needs: [
    'serializer:measure-report-group',
    'model:identifier',
    'model:measure-report-population',
    'model:measure-report-stratifier',
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