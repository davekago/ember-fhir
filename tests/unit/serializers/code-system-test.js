import { moduleForModel, test } from 'ember-qunit';

moduleForModel('code-system', 'Unit | Serializer | CodeSystem', {
  needs: [
    'serializer:code-system',
    'model:identifier',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:code-system-filter',
    'model:code-system-property',
    'model:code-system-concept',
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