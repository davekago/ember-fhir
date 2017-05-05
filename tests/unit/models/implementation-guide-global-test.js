import { moduleForModel, test } from 'ember-qunit';

moduleForModel('implementation-guide-global', 'Unit | Model | ImplementationGuide_Global', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});