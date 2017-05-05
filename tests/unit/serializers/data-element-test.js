import { moduleForModel, test } from 'ember-qunit';

moduleForModel('data-element', 'Unit | Serializer | DataElement', {
  needs: [
    'serializer:data-element',
    'model:identifier',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:data-element-mapping',
    'model:element-definition',
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