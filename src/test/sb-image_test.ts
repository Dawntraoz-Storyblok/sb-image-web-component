/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {SbImage} from '../sb-image.js';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('sb-image', () => {
  test('is defined', () => {
    const el = document.createElement('sb-image');
    assert.instanceOf(el, SbImage);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<sb-image></sb-image>`);
    assert.shadowDom.equal(
      el,
      `
      <img src="https://a.storyblok.com/f/39898/3310x2192/e4ec08624e/demo-image.jpeg/m/1200x400" />
    `
    );
  });

  test('renders with a set image source', async () => {
    const el = await fixture(html`<sb-image imageSrc="https://a.storyblok.com/f/39898/2250x1500/c15735a73c/demo-image-human.jpeg"></sb-image>`);
    assert.shadowDom.equal(
      el,
      `
      <img src="https://a.storyblok.com/f/39898/2250x1500/c15735a73c/demo-image-human.jpeg/m/1200x400" />
    `
    );
  });

  test('styling applied', async () => {
    const el = (await fixture(html`<sb-image></sb-image>`)) as SbImage;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '16px');
  });
});
