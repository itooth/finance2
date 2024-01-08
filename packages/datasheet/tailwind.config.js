/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'vk-',
  darkMode: ['data-theme'],
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
  "rc07": "var(--rc07)",
  "rc11": "var(--rc11)",
  "rc00": "var(--rc00)",
  "rc06": "var(--rc06)",
  "rc02": "var(--rc02)",
  "rc05": "var(--rc05)",
  "rc08": "var(--rc08)",
  "rc09": "var(--rc09)",
  "rc10": "var(--rc10)",
  "rc03": "var(--rc03)",
  "rc01": "var(--rc01)",
  "rc04": "var(--rc04)",
  "cellSelectedColorSolid": "var(--cellSelectedColorSolid)",
  "rowSelectedBgSolid": "var(--rowSelectedBgSolid)",
  "primaryLightSolid": "var(--primaryLightSolid)",
  "gradientBgMask": "var(--gradientBgMask)",
  "extraLightTeal": "var(--extraLightTeal)",
  "extraLightOrange": "var(--extraLightOrange)",
  "extraLightIndigo": "var(--extraLightIndigo)",
  "extraLightRed": "var(--extraLightRed)",
  "extraLightPrimary": "var(--extraLightPrimary)",
  "reverse1": "var(--reverse1)",
  "reverse0": "var(--reverse0)",
  "scrollBar": "var(--scrollBar)",
  "warnLight": "var(--warnLight)",
  "warn": "var(--warn)",
  "warnLightHover": "var(--warnLightHover)",
  "warnLightActive": "var(--warnLightActive)",
  "warnHover": "var(--warnHover)",
  "warnActive": "var(--warnActive)",
  "success": "var(--success)",
  "successActive": "var(--successActive)",
  "successHover": "var(--successHover)",
  "successLight": "var(--successLight)",
  "successLightHover": "var(--successLightHover)",
  "successLightActive": "var(--successLightActive)",
  "link": "var(--link)",
  "linkHover": "var(--linkHover)",
  "linkActive": "var(--linkActive)",
  "linkVisted": "var(--linkVisted)",
  "staticWhite2": "var(--staticWhite2)",
  "staticWhite1": "var(--staticWhite1)",
  "staticDark0": "var(--staticDark0)",
  "staticDark2": "var(--staticDark2)",
  "staticDark1": "var(--staticDark1)",
  "fill2": "var(--fill2)",
  "fill1": "var(--fill1)",
  "fill0": "var(--fill0)",
  "defaultTag": "var(--defaultTag)",
  "staticWhite0": "var(--staticWhite0)",
  "highestBg": "var(--highestBg)",
  "highBg": "var(--highBg)",
  "errorLightHover": "var(--errorLightHover)",
  "errorLightActive": "var(--errorLightActive)",
  "errorLight": "var(--errorLight)",
  "errorHover": "var(--errorHover)",
  "errorActive": "var(--errorActive)",
  "primaryLight": "var(--primaryLight)",
  "primaryLightActive": "var(--primaryLightActive)",
  "primaryLightHover": "var(--primaryLightHover)",
  "primaryActive": "var(--primaryActive)",
  "primaryHover": "var(--primaryHover)",
  "fc19": "var(--fc19)",
  "fc18": "var(--fc18)",
  "fc17": "var(--fc17)",
  "shadowBg": "var(--shadowBg)",
  "enterpriseFg": "var(--enterpriseFg)",
  "enterpriseBg": "var(--enterpriseBg)",
  "bronzeFg": "var(--bronzeFg)",
  "bronzeBg": "var(--bronzeBg)",
  "silverFg": "var(--silverFg)",
  "silverBg": "var(--silverBg)",
  "goldenFg": "var(--goldenFg)",
  "goldenBg": "var(--goldenBg)",
  "or400": "var(--or400)",
  "fc12": "var(--fc12)",
  "fc2": "var(--fc2)",
  "fc1": "var(--fc1)",
  "fc10": "var(--fc10)",
  "fc0": "var(--fc0)",
  "fc3": "var(--fc3)",
  "fc4": "var(--fc4)",
  "fc8": "var(--fc8)",
  "fc14": "var(--fc14)",
  "fc16": "var(--fc16)",
  "fc13": "var(--fc13)",
  "fc15": "var(--fc15)",
  "fc9": "var(--fc9)",
  "fc5": "var(--fc5)",
  "fc11": "var(--fc11)",
  "fc7": "var(--fc7)",
  "fc6": "var(--fc6)",
  "dc03": "var(--dc03)",
  "dc02": "var(--dc02)",
  "dc01": "var(--dc01)",
  "foundMark": "var(--foundMark)",
  "currentSearch": "var(--currentSearch)",
  "calendarWeekend": "var(--calendarWeekend)",
  "folderNodeDefaultColor": "var(--folderNodeDefaultColor)",
  "deepMaskColor": "var(--deepMaskColor)",
  "secondLevelText": "var(--secondLevelText)",
  "firstLevelText": "var(--firstLevelText)",
  "errorColor": "var(--errorColor)",
  "primaryColor": "var(--primaryColor)",
  "thirdLevelText": "var(--thirdLevelText)",
  "fourthLevelText": "var(--fourthLevelText)",
  "defaultBg": "var(--defaultBg)",
  "white": "var(--white)",
  "warningColor": "var(--warningColor)",
  "treeSelectedBg": "var(--treeSelectedBg)",
  "tooltipBg": "var(--tooltipBg)",
  "successColor": "var(--successColor)",
  "cellSelectedColor": "var(--cellSelectedColor)",
  "lineColor": "var(--lineColor)",
  "sheetLineColor": "var(--sheetLineColor)",
  "shadowColor": "var(--shadowColor)",
  "rowSelectedBg": "var(--rowSelectedBg)",
  "lowestBg": "var(--lowestBg)",
  "bgBglessSolidActive": "var(--bgBglessSolidActive)",
  "bgBglessSolidHover": "var(--bgBglessSolidHover)",
  "bgStaticLightDisabled": "var(--bgStaticLightDisabled)",
  "bgStaticLightActive": "var(--bgStaticLightActive)",
  "bgStaticLightHover": "var(--bgStaticLightHover)",
  "bgControlsDegradeHigh": "var(--bgControlsDegradeHigh)",
  "bgControlsDegradeDefault": "var(--bgControlsDegradeDefault)",
  "bgControlsDefaultSolid": "var(--bgControlsDefaultSolid)",
  "bgControlsHoverSolid": "var(--bgControlsHoverSolid)",
  "bgControlsActiveSolid": "var(--bgControlsActiveSolid)",
  "bgBrandLightActiveSolid": "var(--bgBrandLightActiveSolid)",
  "bgBrandLightHoverSolid": "var(--bgBrandLightHoverSolid)",
  "bgBrandLightDefaultSolid": "var(--bgBrandLightDefaultSolid)",
  "bgLogoText": "var(--bgLogoText)",
  "bgLogoIcon": "var(--bgLogoIcon)",
  "rainbowGray4": "var(--rainbowGray4)",
  "rainbowGray3": "var(--rainbowGray3)",
  "rainbowGray2": "var(--rainbowGray2)",
  "rainbowGray5": "var(--rainbowGray5)",
  "rainbowGray1": "var(--rainbowGray1)",
  "borderOnwarnLight": "var(--borderOnwarnLight)",
  "borderOnwarnDefault": "var(--borderOnwarnDefault)",
  "borderWarnDisabled": "var(--borderWarnDisabled)",
  "borderWarnActive": "var(--borderWarnActive)",
  "borderWarnHover": "var(--borderWarnHover)",
  "borderWarnDefault": "var(--borderWarnDefault)",
  "borderOnsuccessLight": "var(--borderOnsuccessLight)",
  "borderOnsuccessDefault": "var(--borderOnsuccessDefault)",
  "borderSuccessDisabled": "var(--borderSuccessDisabled)",
  "borderSuccessActive": "var(--borderSuccessActive)",
  "borderSuccessHover": "var(--borderSuccessHover)",
  "borderSuccessDefault": "var(--borderSuccessDefault)",
  "borderOndangerLight": "var(--borderOndangerLight)",
  "borderOndangerDefault": "var(--borderOndangerDefault)",
  "borderDangerDisabled": "var(--borderDangerDisabled)",
  "textReverseDefault": "var(--textReverseDefault)",
  "textStaticDisabled": "var(--textStaticDisabled)",
  "textStaticTertiary": "var(--textStaticTertiary)",
  "textStaticSecondary": "var(--textStaticSecondary)",
  "textStaticPrimary": "var(--textStaticPrimary)",
  "rainbowYellow1": "var(--rainbowYellow1)",
  "rainbowYellow3": "var(--rainbowYellow3)",
  "rainbowYellow2": "var(--rainbowYellow2)",
  "rainbowYellow4": "var(--rainbowYellow4)",
  "rainbowYellow5": "var(--rainbowYellow5)",
  "bgStaticDarkHigh": "var(--bgStaticDarkHigh)",
  "bgReverseDefault": "var(--bgReverseDefault)",
  "bgGradientHorizontal": "var(--bgGradientHorizontal)",
  "bgGradientVertical": "var(--bgGradientVertical)",
  "borderCommonHover": "var(--borderCommonHover)",
  "borderCommonActive": "var(--borderCommonActive)",
  "borderCommonDisabled": "var(--borderCommonDisabled)",
  "borderGridVertical": "var(--borderGridVertical)",
  "borderGridHorizontal": "var(--borderGridHorizontal)",
  "borderBrandDefault": "var(--borderBrandDefault)",
  "borderBrandHover": "var(--borderBrandHover)",
  "borderBrandActive": "var(--borderBrandActive)",
  "borderBrandDisabled": "var(--borderBrandDisabled)",
  "borderOnbrandDefault": "var(--borderOnbrandDefault)",
  "borderOnbrandLight": "var(--borderOnbrandLight)",
  "borderDangerDefault": "var(--borderDangerDefault)",
  "borderDangerHover": "var(--borderDangerHover)",
  "borderDangerActive": "var(--borderDangerActive)",
  "borderCommonDefault": "var(--borderCommonDefault)",
  "textCommonSecondary": "var(--textCommonSecondary)",
  "textCommonTertiary": "var(--textCommonTertiary)",
  "textCommonQuaternary": "var(--textCommonQuaternary)",
  "textCommonDisabled": "var(--textCommonDisabled)",
  "textBrandDefault": "var(--textBrandDefault)",
  "textBrandHover": "var(--textBrandHover)",
  "textBrandActive": "var(--textBrandActive)",
  "textBrandDisabled": "var(--textBrandDisabled)",
  "textDangerDefault": "var(--textDangerDefault)",
  "textDangerHover": "var(--textDangerHover)",
  "textDangerActive": "var(--textDangerActive)",
  "textDangerDisabled": "var(--textDangerDisabled)",
  "textSuccessDefault": "var(--textSuccessDefault)",
  "textSuccessHover": "var(--textSuccessHover)",
  "textSuccessActive": "var(--textSuccessActive)",
  "textSuccessDisabled": "var(--textSuccessDisabled)",
  "textWarnDefault": "var(--textWarnDefault)",
  "textWarnHover": "var(--textWarnHover)",
  "textWarnActive": "var(--textWarnActive)",
  "textWarnDisabled": "var(--textWarnDisabled)",
  "textLinkDefault": "var(--textLinkDefault)",
  "textLinkHover": "var(--textLinkHover)",
  "textLinkActive": "var(--textLinkActive)",
  "textLinkVisted": "var(--textLinkVisted)",
  "textLinkDisabled": "var(--textLinkDisabled)",
  "textCommonPrimary": "var(--textCommonPrimary)",
  "bgBrandLightHover": "var(--bgBrandLightHover)",
  "bgBrandLightActive": "var(--bgBrandLightActive)",
  "bgBrandLightDisabled": "var(--bgBrandLightDisabled)",
  "bgDangerDefault": "var(--bgDangerDefault)",
  "bgDangerHover": "var(--bgDangerHover)",
  "bgDangerActive": "var(--bgDangerActive)",
  "bgDangerDisabled": "var(--bgDangerDisabled)",
  "bgDangerLightDefault": "var(--bgDangerLightDefault)",
  "bgDangerLightHover": "var(--bgDangerLightHover)",
  "bgDangerLightActive": "var(--bgDangerLightActive)",
  "bgDangerLightDisabled": "var(--bgDangerLightDisabled)",
  "bgSuccessDefault": "var(--bgSuccessDefault)",
  "bgSuccessHover": "var(--bgSuccessHover)",
  "bgSuccessActive": "var(--bgSuccessActive)",
  "bgSuccessDisabled": "var(--bgSuccessDisabled)",
  "bgSuccessLightDefault": "var(--bgSuccessLightDefault)",
  "bgSuccessLightHover": "var(--bgSuccessLightHover)",
  "bgSuccessLightActive": "var(--bgSuccessLightActive)",
  "bgSuccessLightDisabled": "var(--bgSuccessLightDisabled)",
  "bgWarnDefault": "var(--bgWarnDefault)",
  "bgWarnHover": "var(--bgWarnHover)",
  "bgWarnActive": "var(--bgWarnActive)",
  "bgWarnDisabled": "var(--bgWarnDisabled)",
  "bgWarnLightDefault": "var(--bgWarnLightDefault)",
  "bgWarnLightHover": "var(--bgWarnLightHover)",
  "bgWarnLightActive": "var(--bgWarnLightActive)",
  "bgWarnLightDisabled": "var(--bgWarnLightDisabled)",
  "bgStaticLightDefault": "var(--bgStaticLightDefault)",
  "bgStaticDarkLow": "var(--bgStaticDarkLow)",
  "bgStaticDarkMedium": "var(--bgStaticDarkMedium)",
  "bgBrandLightDefault": "var(--bgBrandLightDefault)",
  "bgCommonHigh": "var(--bgCommonHigh)",
  "bgCommonHighest": "var(--bgCommonHighest)",
  "bgBglessHover": "var(--bgBglessHover)",
  "bgBglessActive": "var(--bgBglessActive)",
  "bgControlsDefault": "var(--bgControlsDefault)",
  "bgControlsHover": "var(--bgControlsHover)",
  "bgControlsActive": "var(--bgControlsActive)",
  "bgControlsDisabled": "var(--bgControlsDisabled)",
  "bgControlsElevateDefault": "var(--bgControlsElevateDefault)",
  "bgControlsElevateHigh": "var(--bgControlsElevateHigh)",
  "bgTagDefault": "var(--bgTagDefault)",
  "bgTagHover": "var(--bgTagHover)",
  "bgTagActive": "var(--bgTagActive)",
  "bgTagDisabled": "var(--bgTagDisabled)",
  "bgScrollbarDefault": "var(--bgScrollbarDefault)",
  "bgScrollbarHover": "var(--bgScrollbarHover)",
  "bgScrollbarActive": "var(--bgScrollbarActive)",
  "bgMaskDefault": "var(--bgMaskDefault)",
  "bgBrandDefault": "var(--bgBrandDefault)",
  "bgBrandHover": "var(--bgBrandHover)",
  "bgBrandActive": "var(--bgBrandActive)",
  "bgBrandDisabled": "var(--bgBrandDisabled)",
  "bgCommonDefault": "var(--bgCommonDefault)",
  "bgCommonLower": "var(--bgCommonLower)",
  "rainbowTangerine5": "var(--rainbowTangerine5)",
  "rainbowTangerine1": "var(--rainbowTangerine1)",
  "rainbowTangerine2": "var(--rainbowTangerine2)",
  "rainbowTangerine3": "var(--rainbowTangerine3)",
  "rainbowTangerine4": "var(--rainbowTangerine4)",
  "rainbowPink1": "var(--rainbowPink1)",
  "rainbowPink2": "var(--rainbowPink2)",
  "rainbowPink3": "var(--rainbowPink3)",
  "rainbowPink4": "var(--rainbowPink4)",
  "rainbowPink5": "var(--rainbowPink5)",
  "rainbowGreen1": "var(--rainbowGreen1)",
  "rainbowGreen2": "var(--rainbowGreen2)",
  "rainbowGreen3": "var(--rainbowGreen3)",
  "rainbowGreen4": "var(--rainbowGreen4)",
  "rainbowGreen5": "var(--rainbowGreen5)",
  "rainbowBrown1": "var(--rainbowBrown1)",
  "rainbowBrown2": "var(--rainbowBrown2)",
  "rainbowBrown3": "var(--rainbowBrown3)",
  "rainbowBrown4": "var(--rainbowBrown4)",
  "rainbowBrown5": "var(--rainbowBrown5)",
  "rainbowBlue2": "var(--rainbowBlue2)",
  "rainbowBlue3": "var(--rainbowBlue3)",
  "rainbowBlue4": "var(--rainbowBlue4)",
  "rainbowBlue1": "var(--rainbowBlue1)",
  "rainbowBlue5": "var(--rainbowBlue5)",
  "rainbowOrange1": "var(--rainbowOrange1)",
  "rainbowOrange2": "var(--rainbowOrange2)",
  "rainbowOrange3": "var(--rainbowOrange3)",
  "rainbowOrange4": "var(--rainbowOrange4)",
  "rainbowOrange5": "var(--rainbowOrange5)",
  "rainbowRed1": "var(--rainbowRed1)",
  "rainbowRed2": "var(--rainbowRed2)",
  "rainbowRed3": "var(--rainbowRed3)",
  "rainbowRed4": "var(--rainbowRed4)",
  "rainbowRed5": "var(--rainbowRed5)",
  "rainbowIndigo1": "var(--rainbowIndigo1)",
  "rainbowIndigo2": "var(--rainbowIndigo2)",
  "rainbowIndigo3": "var(--rainbowIndigo3)",
  "rainbowIndigo4": "var(--rainbowIndigo4)",
  "rainbowIndigo5": "var(--rainbowIndigo5)",
  "rainbowTeal1": "var(--rainbowTeal1)",
  "rainbowTeal2": "var(--rainbowTeal2)",
  "rainbowTeal3": "var(--rainbowTeal3)",
  "rainbowTeal4": "var(--rainbowTeal4)",
  "rainbowTeal5": "var(--rainbowTeal5)",
  "rainbowPurple5": "var(--rainbowPurple5)",
  "rainbowPurple4": "var(--rainbowPurple4)",
  "rainbowPurple3": "var(--rainbowPurple3)",
  "rainbowPurple2": "var(--rainbowPurple2)",
  "rainbowPurple1": "var(--rainbowPurple1)",
  "shadowCommonHigh": "var(--shadowCommonHigh)",
  "shadowCommonDefault": "var(--shadowCommonDefault)",
  "shadowSideRightDefault": "var(--shadowSideRightDefault)",
  "shadowSideLeftDefault": "var(--shadowSideLeftDefault)",
  "shadowSideLeftHigh": "var(--shadowSideLeftHigh)",
  "shadowSideRightHigh": "var(--shadowSideRightHigh)",
  "shadowCommonHighest": "var(--shadowCommonHighest)",
  "lightMaskColor": "var(--lightMaskColor)"
}
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require('@tailwindcss/typography')],
};
   