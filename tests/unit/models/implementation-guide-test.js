import { moduleForModel, test } from 'ember-qunit';

moduleForModel('implementation-guide', 'Unit | Model | ImplementationGuide', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:implementation-guide-dependency',
    'model:implementation-guide-package',
    'model:implementation-guide-global',
    'model:implementation-guide-page'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});