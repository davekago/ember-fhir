import { moduleForModel, test } from 'ember-qunit';

moduleForModel('implementation-guide-package', 'Unit | Serializer | ImplementationGuide_Package', {
  needs: [
    'serializer:implementation-guide-package',
    'model:implementation-guide-resource',
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