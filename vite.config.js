


import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";


export default defineConfig({
 plugins: [tailwindcss()],
 base: "/SAE-301/",
 build: {
   rollupOptions: {
     input: {
  main: resolve(__dirname, "index.html"),
  category: resolve(__dirname, "pages/Catégory.html"),
  commande: resolve(__dirname, "pages/commande.html"),
  confirmation: resolve(__dirname, "pages/confirmation.html"),
  connexion: resolve(__dirname, "pages/connexion.html"),
  detail: resolve(__dirname, "pages/Detail.html"),
  detailGris: resolve(__dirname, "pages/Detail-gris.html"),
  detailRose: resolve(__dirname, "pages/Detail-rose.html"),
  inscription: resolve(__dirname, "pages/inscription.html"),
  inviter: resolve(__dirname, "pages/inviter.html"),
  console: resolve(__dirname, "pages/Console.html"),
  panier: resolve(__dirname, "pages/Panier.html"),
  produit: resolve(__dirname, "pages/Produit.html"),
  profil: resolve(__dirname, "pages/Profil.html"),
  validation: resolve(__dirname, "pages/validation.html"),
     
     },
   },
 },
});


