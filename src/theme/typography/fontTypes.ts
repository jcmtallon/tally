import { Typography } from './typographyTypes'

const typography: Typography = {
  header: {
    h1: {
      fontSize: '3rem', // 48px
      lineHeight: 1, // 48px | 3rem
      fontWeight: 700, // bold
    },
    h2: {
      fontSize: '2.25rem', // 36px
      lineHeight: 1.1, // 2.5rem | 40px
      fontWeight: 700, // bold
    },
    h3: {
      fontSize: '1.875rem', // 30px
      lineHeight: 1.2, // 2.25rem | 36px
      fontWeight: 700, // bold
    },
    h4: {
      fontSize: '1.5rem', // 24px
      lineHeight: 1.3, // 2rem | 32px
      fontWeight: 700, // bold
    },
    h5: {
      fontSize: '1.25rem', // 20px
      lineHeight: 1.4, // 1.75rem | 28px
      fontWeight: 700, // bold
    },
    h6: {
      fontSize: '1.125rem', // 18px
      lineHeight: 1.5, // 1.75rem | 28px
      fontWeight: 700, // bold
    },
    h7: {
      fontSize: '1rem', // 16px
      lineHeight: 1.5, // 1.5rem | 24px
      fontWeight: 700, // bold
    },
  },
  body: {
    lg: {
      regular: {
        fontSize: '1.125rem', // 18px
        lineHeight: 1.55, // 28px | 1.75rem
        fontWeight: 400, // regular
      },
      strong: {
        fontSize: '1.125rem', // 18px
        lineHeight: 1.55, // 28px | 1.75rem
        fontWeight: 700, // bold
      },
    },
    base: {
      regular: {
        fontSize: '1rem', // 16px
        lineHeight: 1.5, // 24px | 1.5rem
        fontWeight: 400, // regular
      },
      strong: {
        fontSize: '1rem', // 16px
        lineHeight: 1.5, // 24px  | 1.5rem
        fontWeight: 700, // bold
      },
    },
    md: {
      regular: {
        fontSize: '0.875rem', // 14px
        lineHeight: 1.71, // 24px | 1.5rem
        fontWeight: 400, // regular
      },
      strong: {
        fontSize: '0.875rem', // 14px
        lineHeight: 1.71, // 24px | 1.5rem
        fontWeight: 700, // bold
      },
    },
    sm: {
      regular: {
        fontSize: '0.8125rem', // 13px
        lineHeight: 1.38, // 18px | 1.125rem
        fontWeight: 400, // regular
      },
      strong: {
        fontSize: '0.8125rem', // 13px
        lineHeight: 1.38, // 18px | 1.125rem
        fontWeight: 700, // bold
      },
    },
    xs: {
      regular: {
        fontSize: '0.75rem', // 12px
        lineHeight: 1.33, // 16px | 1rem
        fontWeight: 400, // regular
      },
      strong: {
        fontSize: '0.75rem', // 12px
        lineHeight: 1.33, // 16px | 1rem
        fontWeight: 700, // bold
      },
    },
    xxs: {
      regular: {
        fontSize: '0.625rem', // 10px
        lineHeight: 1.2, // 12px | '1.333rem'
        fontWeight: 400, // regular
      },
      strong: {
        fontSize: '0.625rem', // 10px
        lineHeight: 1.2, // 12px | 1.333rem
        fontWeight: 700, // bold
      },
    },
  },
}

export { typography }
