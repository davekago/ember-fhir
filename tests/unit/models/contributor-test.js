import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contributor', 'Unit | Model | Contributor', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:contact-detail'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});