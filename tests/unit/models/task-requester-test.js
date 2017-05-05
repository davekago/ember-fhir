import { moduleForModel, test } from 'ember-qunit';

moduleForModel('task-requester', 'Unit | Model | Task_Requester', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});