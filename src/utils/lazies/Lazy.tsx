import { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const LazyLoad = (importFunc: any) => {
  const LazyComponent = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(importFunc());
      }, 1000);
    });
  });
  /* const LazyComponent = lazy(importFunc) */

  return () => (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};

export default LazyLoad;



// import { lazy, Suspense } from "react";
// import Loading from "./components/Loading";
// /* {abc: 5, xyz: 3} */
// const LazyLoad = (importFunc: any, props: any = undefined) => {

//   const LazyComponent = lazy(() => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(importFunc());
//       }, 1000);
//     });
//   });
//   /* const LazyComponent = lazy(importFunc) */

//   return () => (
//     <Suspense fallback={<Loading />}>
//       <LazyComponent {...props} />
//     </Suspense>
//   );
// };

// export default LazyLoad;
