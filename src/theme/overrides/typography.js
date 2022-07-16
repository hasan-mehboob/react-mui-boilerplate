import { pxToRem } from "../themeUtils/utils";

function responsiveFontSizes({ xs, sm, md, lg }) {
  return {
    "@media (max-width:1536px)": {
      fontSize: pxToRem(lg),
    },
    "@media (max-width:1200px)": {
      fontSize: pxToRem(md),
    },
    "@media (max-width:900px)": {
      fontSize: pxToRem(sm),
    },
    "@media (max-width: 600px)": {
      fontSize: pxToRem(xs),
    },
  };
}
const FONT_PRIMARY = "sans-serif";
export default function Typography(theme) {
  return {
    MuiTypography: {
      variants: [
        // All Typography Variants Here
        {
          props: { variant: "h1" },
          style: {
            fontSize: "3.5rem",
            fontFamily: FONT_PRIMARY,
            fontWeight: "600",
            color: theme.palette.primary.main,
            ...responsiveFontSizes({ xs: 35, sm: 40, md: 45, lg: 50 }),
          },
        },
      ],
    },
  };
}
