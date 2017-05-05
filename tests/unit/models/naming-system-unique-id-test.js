import { moduleForModel, test } from 'ember-qunit';

moduleForModel('naming-system-unique-id', 'Unit | Model | NamingSystem_UniqueId', {
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