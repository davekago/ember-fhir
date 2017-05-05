import { moduleForModel, test } from 'ember-qunit';

moduleForModel('composition-event', 'Unit | Serializer | Composition_Event', {
  needs: [
    'serializer:composition-event',
    'model:codeable-concept',
    'model:period',
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