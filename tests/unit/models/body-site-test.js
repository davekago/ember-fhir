import { moduleForModel, test } from 'ember-qunit';

moduleForModel('body-site', 'Unit | Model | BodySite', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:attachment',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});