import { moduleForModel, test } from 'ember-qunit';

moduleForModel('search-parameter', 'Unit | Model | SearchParameter', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:search-parameter-component'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});