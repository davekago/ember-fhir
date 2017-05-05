import { moduleForModel, test } from 'ember-qunit';

moduleForModel('composition-event', 'Unit | Model | Composition_Event', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:period',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});