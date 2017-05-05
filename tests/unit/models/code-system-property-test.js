import { moduleForModel, test } from 'ember-qunit';

moduleForModel('code-system-property', 'Unit | Model | CodeSystem_Property', {
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