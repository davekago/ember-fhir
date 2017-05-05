import { moduleForModel, test } from 'ember-qunit';

moduleForModel('implementation-guide-page', 'Unit | Model | ImplementationGuide_Page', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:implementation-guide-page'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});