import { ProductCategory } from "@/type/product/product.type.ts";
import {
  AddProduct,
  QueryProductRequest,
} from "@/store/action/product.action.ts";
import Store from "@/store";
function App() {
  const [count, setCount] = useState(0);

  const sampleData = {
    category: ProductCategory.Book,
    description: "description",
    price: 100,
    title: "title",
    id: "id",
    isAvailable: true,
  };

  useEffect(() => {
    Store.dispatch(QueryProductRequest());
  }, []);

  function handleCount() {
    setCount(count + 1);
    Store.dispatch(AddProduct(sampleData));
  }
  return (
    <div>
      <button onClick={handleCount}>click</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
