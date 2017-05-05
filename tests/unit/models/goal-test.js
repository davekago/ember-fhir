import { moduleForModel, test } from 'ember-qunit';

moduleForModel('goal', 'Unit | Model | Goal', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:goal-target',
    'model:annotation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});