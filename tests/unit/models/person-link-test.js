import { moduleForModel, test } from 'ember-qunit';

moduleForModel('person-link', 'Unit | Model | Person_Link', {
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