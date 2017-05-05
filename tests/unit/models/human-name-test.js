import { moduleForModel, test } from 'ember-qunit';

moduleForModel('human-name', 'Unit | Model | HumanName', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:period'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});