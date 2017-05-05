import { moduleForModel, test } from 'ember-qunit';

moduleForModel('questionnaire-option', 'Unit | Model | Questionnaire_Option', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:coding'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});