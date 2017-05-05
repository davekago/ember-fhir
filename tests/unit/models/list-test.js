import { moduleForModel, test } from 'ember-qunit';

moduleForModel('list', 'Unit | Model | List', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:annotation',
    'model:list-entry'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});