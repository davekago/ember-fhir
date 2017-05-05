import { moduleForModel, test } from 'ember-qunit';

moduleForModel('data-requirement-code-filter', 'Unit | Serializer | DataRequirement_CodeFilter', {
  needs: [
    'serializer:data-requirement-code-filter',
    'model:reference',
    'model:coding',
    'model:codeable-concept',
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