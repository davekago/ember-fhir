import { moduleForModel, test } from 'ember-qunit';

moduleForModel('implementation-guide-package', 'Unit | Model | ImplementationGuide_Package', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:implementation-guide-resource'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});