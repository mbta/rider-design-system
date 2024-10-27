import tw from "tailwindcss";
import ap from "autoprefixer";

export default {
  plugins: [
    tw(`./styles/tailwind.config.js`),
    ap,
  ]
};
