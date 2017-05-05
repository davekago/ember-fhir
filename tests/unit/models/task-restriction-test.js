import { moduleForModel, test } from 'ember-qunit';

moduleForModel('task-restriction', 'Unit | Model | Task_Restriction', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:period',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});