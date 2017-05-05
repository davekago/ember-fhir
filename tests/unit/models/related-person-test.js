import { moduleForModel, test } from 'ember-qunit';

moduleForModel('related-person', 'Unit | Model | RelatedPerson', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:human-name',
    'model:contact-point',
    'model:address',
    'model:attachment',
    'model:period'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});