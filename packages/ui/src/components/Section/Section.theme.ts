import { Theme, ThemeOptions, ComponentsProps, ComponentsOverrides, ComponentsVariants } from '@mui/material/styles';

// https://mui.com/customization/theme-components/#default-props
export const defaultProps: ComponentsProps['Section'] = {};

// https://mui.com/customization/theme-components/#global-style-overrides
export const styleOverrides: ComponentsOverrides<Theme>['Section'] = {
  root: ({ theme, hasBackground }) => {
    return {
      'marginTop': hasBackground ? 0 : theme.spacing(15),
      'marginBottom': hasBackground ? 0 : theme.spacing(15),
      'paddingTop': hasBackground ? theme.spacing(20) : 0,
      'paddingBottom': hasBackground ? theme.spacing(20) : 0,
      'overflow': hasBackground ? 'hidden' : 'visible',

      '& &': {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10)
      },

      // 'main > &': {
      //   '&:first-of-type': {
      //     marginTop: 0
      //   }
      // },

      'main > &:last-of-type': {
        marginBottom: 0
      },

      '& [class*=backgroundMedia]': {
        height: 'auto !important',
        width: '100% !important'
      }
    };
  },

  introText: ({ theme, align }) => ({
    'gridColumn': '1 / span 2',
    'position': 'relative',

    'marginBottom': theme.spacing(4),

    '[class$=Text-title]': {
      ...theme.typography.h4,
      textAlign: `${align === 'center' ? 'center' : 'left'}`
    },

    '[class$=Text-subtitle]': {
      ...theme.typography.h3,
      textAlign: `${align === 'center' ? 'center' : 'left'}`,
      marginTop: theme.spacing(2)
    },

    '[class$=Text-root]': {
      marginTop: theme.spacing(3),
      textAlign: `${align === 'center' ? 'center' : 'left'}`
    },

    [theme.breakpoints.up('md')]: {
      'gridColumn': '1 / span 5',

      ...(align === 'center' && {
        gridColumn: '1 / -1'
      }),

      '[class$=Text-title]': {
        ...theme.typography.h3
      },

      '[class$=Text-root] > *': {
        ...theme.typography.body2
      },

      '&::before': {
        width: 115
      }
    },

    [theme.breakpoints.up('md')]: {
      'gridColumn': '1 / span 8',

      ...(align === 'center' && {
        gridColumn: '3 / span 8'
      }),

      '[class$=Text-title]': {
        ...theme.typography.h2
      }
    },

    '& + [class*=contentContainer]': {
      marginTop: theme.spacing(4)
    }
  })
  //
  // Use the ownerState to set dynamic styles
  // root: ({ ownerState, theme }) => {
  //   return {
  //     backgroundColor: ownerState.variant === 'example' ? 'red' : theme.palette.background.paper
  //   };
  // }
};

// https://mui.com/customization/theme-components/#adding-new-component-variants
const createVariants = (_theme: Theme): ComponentsVariants['Section'] => [
  // Use prop matching to set variant styles
  // {
  //   props: {
  //     variant: 'example'
  //   },
  //   style: {
  //     backgroundColor: theme.palette.primary.main
  //   }
  // }
  // Other props are also valid
  // {
  //   props: {
  //     backgroundColor: 'primary.main',
  //   },
  //   style: {
  //     color: theme.palette.primary.contrastText
  //   }
  // }
];

export default (theme: Theme): ThemeOptions => ({
  components: {
    Section: {
      defaultProps,
      styleOverrides,
      variants: createVariants(theme)
    }
  }
});
