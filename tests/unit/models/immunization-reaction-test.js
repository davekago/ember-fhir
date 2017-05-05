import { moduleForModel, test } from 'ember-qunit';

moduleForModel('immunization-reaction', 'Unit | Model | Immunization_Reaction', {
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