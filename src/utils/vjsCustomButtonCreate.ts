import videojs from 'video.js';
import type Player from 'video.js/dist/types/player';

export interface VjsButtonConfig {
  name: string;
  tooltip: string;
  svgIcon: string;
  className?: string;
}

export function vjsCustomButtonCreate(config: VjsButtonConfig) {
  if (videojs.getComponent(config.name)) return;

  const Button = videojs.getComponent('Button');

  class CustomButton extends Button {
    private _onClick: (() => void) | null = null;

    constructor(player: Player, options?: Record<string, unknown>) {
      super(player, options);
      (this as any).controlText(config.tooltip);
      this.addClass(`vjs-${config.name.toLowerCase()}`);
      if (config.className) this.addClass(config.className);
    }

    setClickHandler(fn: () => void) {
      this._onClick = fn;
    }

    handleClick() {
      this._onClick?.();
    }

    createEl() {
      const el = super.createEl('button', {
        className: `vjs-${config.name.toLowerCase()} vjs-control vjs-button`
      });

      const icon = document.createElement('span');
      icon.className = 'vjs-icon-placeholder';
      icon.setAttribute('aria-hidden', 'true');
      icon.innerHTML = config.svgIcon;
      el.appendChild(icon);

      return el;
    }
  }

  videojs.registerComponent(config.name, CustomButton);
}