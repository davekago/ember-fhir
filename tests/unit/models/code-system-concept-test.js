import { moduleForModel, test } from 'ember-qunit';

moduleForModel('code-system-concept', 'Unit | Model | CodeSystem_Concept', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:code-system-designation',
    'model:code-system-property-1',
    'model:code-system-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});