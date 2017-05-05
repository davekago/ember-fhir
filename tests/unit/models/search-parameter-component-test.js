import { moduleForModel, test } from 'ember-qunit';

moduleForModel('search-parameter-component', 'Unit | Model | SearchParameter_Component', {
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