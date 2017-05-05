import { moduleForModel, test } from 'ember-qunit';

moduleForModel('measure-group', 'Unit | Serializer | Measure_Group', {
  needs: [
    'serializer:measure-group',
    'model:identifier',
    'model:measure-population',
    'model:measure-stratifier',
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