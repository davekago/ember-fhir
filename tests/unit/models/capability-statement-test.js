import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement', 'Unit | Model | CapabilityStatement', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:capability-statement-software',
    'model:capability-statement-implementation',
    'model:reference',
    'model:capability-statement-rest',
    'model:capability-statement-messaging',
    'model:capability-statement-document'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});