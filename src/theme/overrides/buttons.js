import { pxToRem } from "../themeUtils/utils";

function responsiveButtonSizes({ xs, sm, md, lg }) {
  return {
    "@media (min-width: 359px)": {
      fontSize: pxToRem(xs),
    },
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:960px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1280px)": {
      fontSize: pxToRem(lg),
    },
  };
}
function responsiveButtonPadding({ xs, sm, md, lg }) {
  return {
    "@media (min-width: 359px)": {
      padding: xs,
    },
    "@media (min-width:600px)": {
      padding: sm,
    },
    "@media (min-width:960px)": {
      padding: md,
    },
    "@media (min-width:1280px)": {
      padding: lg,
    },
  };
}

export default function Button(theme) {
  return {
    MuiButton: {
      variants: [
        // All Button Variants here
        {
          props: { variant: "primary" },
          style: {
            background: theme.palette.primary.dark,
            color: "red",
            textTransform: "none",
            fontFamily: "Poppins",
            fontWeight: "600",
            padding: "0.5rem 2rem",
            fontSize: "1rem",
            cursor: "pointer",
            ...responsiveButtonSizes({ xs: 12, sm: 12, md: 14, lg: 14 }),
            ...responsiveButtonPadding({
              xs: "0.5rem 1rem",
              sm: "0.5rem 1rem",
              md: "0.5rem 1.5rem",
              lg: "0.5rem 2rem",
            }),
            "&:hover": {
              transform: "scale(0.98)",
            },
          },
        },
      ],
    },
  };
}
