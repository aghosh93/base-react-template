# base-react-template

This is my base react template complete with what I think is needed for developing single page react apps.

## Contents

This template includes:

- [ESlint](https://eslint.org/)
- [React](https://reactjs.org/)
- [React Router](https://reacttraining.com/react-router/)
- [SCSS](https://sass-lang.com/)
- [Webpack](https://webpack.js.org/)

Features Included:
- Bundle Spitting - simple ones provided by [webpack configs](https://webpack.js.org/guides/code-splitting/#prevent-duplication) and [`React.lazy`](https://reactjs.org/docs/code-splitting.html#reactlazy)
- Routing - Added the ability for routing using React Router. Currently just using `HashRouter` as it give the flexibility to last on route with out having to land `Home` page first to make a `React.lazy` work splitting. Future work to add ability for Static Routing with Server Side Render to create landing pages outside of regular MPA.
