import { moduleForModel, test } from 'ember-qunit';

moduleForModel('composition-section', 'Unit | Serializer | Composition_Section', {
  needs: [
    'serializer:composition-section',
    'model:codeable-concept',
    'model:narrative',
    'model:reference',
    'model:composition-section',
    'model:meta',
    'model:resource',
    'model:extension'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});