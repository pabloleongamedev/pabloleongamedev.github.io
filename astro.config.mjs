import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({

  site: 'https://pabloleongamedev.github.io',

  output: "static",

  integrations: [
    tailwind(),

    icon({
      iconDir: "src/icons"
    })

  ]

});