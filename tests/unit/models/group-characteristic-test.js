import { moduleForModel, test } from 'ember-qunit';

moduleForModel('group-characteristic', 'Unit | Model | Group_Characteristic', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:quantity',
    'model:range',
    'model:period'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});