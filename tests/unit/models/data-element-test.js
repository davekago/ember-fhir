import { moduleForModel, test } from 'ember-qunit';

moduleForModel('data-element', 'Unit | Model | DataElement', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:data-element-mapping',
    'model:element-definition'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});