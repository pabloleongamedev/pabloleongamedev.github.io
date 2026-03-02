import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';



export default defineConfig({
  site: 'https://pabloleongamedev.github.io',
  integrations: [
    tailwind(),
    icon()
  ],
  integrations: [
   icon({
     iconDir: "src/icons"
   })
 ]
});