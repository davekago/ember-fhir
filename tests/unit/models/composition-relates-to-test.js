import { moduleForModel, test } from 'ember-qunit';

moduleForModel('composition-relates-to', 'Unit | Model | Composition_RelatesTo', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});