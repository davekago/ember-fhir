import { moduleForModel, test } from 'ember-qunit';

moduleForModel('code-system-filter', 'Unit | Model | CodeSystem_Filter', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});