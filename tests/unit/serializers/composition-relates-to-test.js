import { moduleForModel, test } from 'ember-qunit';

moduleForModel('composition-relates-to', 'Unit | Serializer | Composition_RelatesTo', {
  needs: [
    'serializer:composition-relates-to',
    'model:identifier',
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