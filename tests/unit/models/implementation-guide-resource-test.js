import { moduleForModel, test } from 'ember-qunit';

moduleForModel('implementation-guide-resource', 'Unit | Model | ImplementationGuide_Resource', {
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