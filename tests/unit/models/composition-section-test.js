import { moduleForModel, test } from 'ember-qunit';

moduleForModel('composition-section', 'Unit | Model | Composition_Section', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:reference',
    'model:composition-section'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});