import { moduleForModel, test } from 'ember-qunit';

moduleForModel('diagnostic-report-performer', 'Unit | Model | DiagnosticReport_Performer', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});