import { moduleForModel, test } from 'ember-qunit';

moduleForModel('measure-report-population-1', 'Unit | Serializer | MeasureReport_Population1', {
  needs: [
    'serializer:measure-report-population-1',
    'model:identifier',
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