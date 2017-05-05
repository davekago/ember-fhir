import { moduleForModel, test } from 'ember-qunit';

moduleForModel('group-member', 'Unit | Model | Group_Member', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:period'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});