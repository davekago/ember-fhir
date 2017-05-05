import { moduleForModel, test } from 'ember-qunit';

moduleForModel('person', 'Unit | Model | Person', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:human-name',
    'model:contact-point',
    'model:address',
    'model:attachment',
    'model:reference',
    'model:person-link'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});