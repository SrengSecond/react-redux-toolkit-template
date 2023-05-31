import { Suspense } from "react";

export default function App() {
  const productState = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   console.log("initial State", store.getState());
  // }, []);

  useEffect(() => {
    handleFetch();
  }, []);

  function handleFetch() {
    dispatch(productAsyncAction.queryProduct());
  }

  return (
    <div>
      <button onClick={handleFetch}>Add</button>

      <Suspense fallback={<p>Loading...</p>}>
        {!productState.isLoading && productState.isError ? <p>error</p> : null}
        {!productState.isLoading && productState.products.length ? (
          <div>
            {productState.products.map((each, index) => (
              <div key={index}>
                <p>{each.title}</p>
                <p>{each.description}</p>
              </div>
            ))}
          </div>
        ) : null}
      </Suspense>
    </div>
  );
}
