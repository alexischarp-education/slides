// Entry point for the theme styles.
// `layouts-base.css` ships with the Slidev client and provides the baseline
// typography/spacing every theme is expected to build on top of.
import '@slidev/client/styles/layouts-base.css';

// Design tokens first (they are consumed by everything below), then the
// progressively more specific layers. `print.css` is imported last so its
// overrides always win.
import './css-vars.css';
import './base.css';
import './code.css';
import './layout.css';
import './animations.css';
import './print.css';
