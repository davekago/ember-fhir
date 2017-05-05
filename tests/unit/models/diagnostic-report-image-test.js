import { moduleForModel, test } from 'ember-qunit';

moduleForModel('diagnostic-report-image', 'Unit | Model | DiagnosticReport_Image', {
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