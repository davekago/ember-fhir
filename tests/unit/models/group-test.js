import { moduleForModel, test } from 'ember-qunit';

moduleForModel('group', 'Unit | Model | Group', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:group-characteristic',
    'model:group-member'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});