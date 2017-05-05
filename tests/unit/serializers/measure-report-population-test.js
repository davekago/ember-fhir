import { moduleForModel, test } from 'ember-qunit';

moduleForModel('measure-report-population', 'Unit | Serializer | MeasureReport_Population', {
  needs: [
    'serializer:measure-report-population',
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