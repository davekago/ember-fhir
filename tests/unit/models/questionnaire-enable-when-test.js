import { moduleForModel, test } from 'ember-qunit';

moduleForModel('questionnaire-enable-when', 'Unit | Model | Questionnaire_EnableWhen', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:attachment',
    'model:coding',
    'model:quantity',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});