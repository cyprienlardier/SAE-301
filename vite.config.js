


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
      category: resolve(__dirname, "Catégory.html"),
      commande: resolve(__dirname, "commande.html"),
      confirmation: resolve(__dirname, "confirmation.html"),
      connexion: resolve(__dirname, "connexion.html"),
      detail: resolve(__dirname, "Detail.html"),
      detailGris: resolve(__dirname, "Detail-gris.html"),
      detailRose: resolve(__dirname, "Detail-rose.html"),
      inscription: resolve(__dirname, "inscription.html"),
      inviter: resolve(__dirname, "inviter.html"),
  console: resolve(__dirname, "Console.html"),
      panier: resolve(__dirname, "Panier.html"),
      produit: resolve(__dirname, "Produit.html"),
      profil: resolve(__dirname, "Profil.html"),
      validation: resolve(__dirname, "validation.html"),
     
     },
   },
 },
});


