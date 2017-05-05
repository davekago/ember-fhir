import { moduleForModel, test } from 'ember-qunit';

moduleForModel('implementation-guide', 'Unit | Serializer | ImplementationGuide', {
  needs: [
    'serializer:implementation-guide',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:implementation-guide-dependency',
    'model:implementation-guide-package',
    'model:implementation-guide-global',
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