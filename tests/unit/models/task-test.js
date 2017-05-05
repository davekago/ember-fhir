import { moduleForModel, test } from 'ember-qunit';

moduleForModel('task', 'Unit | Model | Task', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:task-requester',
    'model:annotation',
    'model:task-restriction',
    'model:task-input',
    'model:task-output'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});