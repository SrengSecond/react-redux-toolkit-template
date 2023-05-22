import { Suspense } from "react";
import store from "@/redux";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const productStore = useSelector((state) => state.product);
  const dispatch = useDispatch();

  // const sampleData = {
  //   category: ProductCategory.Book,
  //   description: "description",
  //   price: 100,
  //   title: "title",
  //   id: "id",
  //   isAvailable: true,
  // };

  useEffect(() => {
    console.log("initial State", store.getState());
  }, []);

  // function handleAdd() {
  //   dispatch(productAction.create(sampleData));
  // }

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
        {!productStore.isLoading && productStore.error ? <p>error</p> : null}
        {!productStore.isLoading && productStore.products.length ? (
          <div>
            {productStore.products.map((each, index) => (
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
