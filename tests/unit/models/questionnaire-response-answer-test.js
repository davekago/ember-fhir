import { moduleForModel, test } from 'ember-qunit';

moduleForModel('questionnaire-response-answer', 'Unit | Model | QuestionnaireResponse_Answer', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:attachment',
    'model:coding',
    'model:quantity',
    'model:reference',
    'model:questionnaire-response-item'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});