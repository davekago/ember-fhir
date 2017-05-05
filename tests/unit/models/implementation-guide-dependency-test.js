import { moduleForModel, test } from 'ember-qunit';

moduleForModel('implementation-guide-dependency', 'Unit | Model | ImplementationGuide_Dependency', {
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