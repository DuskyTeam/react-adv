import { lazy, LazyExoticComponent } from "react";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunckName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);

// const Lazy2 = lazy(
//   () =>
//     import(
//       /* webpackChunckName: "LazyPage1" */ "../01-lazyload/pages/LazyPage2"
//     )
// );
// const Lazy1 = lazy(
//   () =>
//     import(
//       /* webpackChunckName: "LazyPage2" */ "../01-lazyload/pages/LazyPage1"
//     )
// );
// const Lazy3 = lazy(
//   () =>
//     import(
//       /* webpackChunckName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3"
//     )
// );

export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "Lazi Layout - Dashboard",
  },

  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
