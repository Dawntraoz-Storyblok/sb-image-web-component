/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('sb-image')
export class SbImage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: max-content
    }
  `;

  /**
   * Original image source
   */
  @property({type: String})
  imageSrc = 'https://a.storyblok.com/f/39898/3310x2192/e4ec08624e/demo-image.jpeg';


  /**
   * Size to crop or resize
   */
  @property({type: String})
  size = '1200x400';

  override render() {
    return html`
      <img .src=${this.useImageService(this.imageSrc)} />
    `;
  }

  /**
   * Formats the image URL with the image service props
   * @param imageSrc The original image source
   */
  useImageService(imageSrc: string): string {
    return `${imageSrc}/m/${this.size}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sb-image': SbImage;
  }
}
