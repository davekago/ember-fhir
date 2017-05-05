import { moduleForModel, test } from 'ember-qunit';

moduleForModel('questionnaire-item', 'Unit | Serializer | Questionnaire_Item', {
  needs: [
    'serializer:questionnaire-item',
    'model:coding',
    'model:questionnaire-enable-when',
    'model:reference',
    'model:questionnaire-option',
    'model:attachment',
    'model:quantity',
    'model:questionnaire-item',
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