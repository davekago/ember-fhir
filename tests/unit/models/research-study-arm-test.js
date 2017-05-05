import { moduleForModel, test } from 'ember-qunit';

moduleForModel('research-study-arm', 'Unit | Model | ResearchStudy_Arm', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});