import { moduleForModel, test } from 'ember-qunit';

moduleForModel('implementation-guide-page', 'Unit | Serializer | ImplementationGuide_Page', {
  needs: [
    'serializer:implementation-guide-page',
    'model:implementation-guide-page',
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