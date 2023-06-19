/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Lanxe/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        forta7: ["Comfortaa_700Bold"],
        forta6: ["Comfortaa_600SemiBold"],
        forta5: ["Comfortaa_500Medium"],
        forta4: ["Comfortaa_400Regular"],
        forta3: ["Comfortaa_300Light"],
        bai2: ["BaiJamjuree_200ExtraLight"],
        bai2italic: ["BaiJamjuree_200ExtraLight_Italic"],
        bai3: ["BaiJamjuree_300Light"],
        bai3italic: ["BaiJamjuree_300Light_Italic"],
        bai4: ["BaiJamjuree_400Regular"],
        bai4italic: ["BaiJamjuree_400Regular_Italic"],
        bai5: ["BaiJamjuree_500Medium"],
        bai5italic: ["BaiJamjuree_500Medium_Italic"],
        bai6: ["BaiJamjuree_600SemiBold"],
        bai6italic: ["BaiJamjuree_600SemiBold_Italic"],
        bai7: ["BaiJamjuree_700Bold"],
        bai7italic: ["BaiJamjuree_700Bold_Italic"],
        jp1: ["NotoSansJP_100Thin"],
        jp3: ["NotoSansJP_300Light"],
        jp4: ["NotoSansJP_400Regular"],
        jp5: ["NotoSansJP_500Medium"],
        jp7: ["NotoSansJP_700Bold"],
        jp9: ["NotoSansJP_900Black"],
      },
      dropShadow: {
        "btn": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }
    },
  },
  plugins: [],
}
