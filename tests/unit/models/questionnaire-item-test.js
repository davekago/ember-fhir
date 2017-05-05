import { moduleForModel, test } from 'ember-qunit';

moduleForModel('questionnaire-item', 'Unit | Model | Questionnaire_Item', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:coding',
    'model:questionnaire-enable-when',
    'model:reference',
    'model:questionnaire-option',
    'model:attachment',
    'model:quantity',
    'model:questionnaire-item'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});