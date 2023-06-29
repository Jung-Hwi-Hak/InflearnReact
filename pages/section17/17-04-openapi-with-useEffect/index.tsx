import axios from "axios";
import MyPage from "../../section01/01-01-example";
import { useEffect, useState } from "react";

export default function RestGetPage(): JSX.Element {
  const [dog, setDog] = useState("");

  useEffect(() => {
    const onClickSync = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log(result.data.message);
      setDog(result.data.message);
    };

    void onClickSync();

    // setDog(result);
  }, []);

  return (
    <div>
      <img src={dog} alt="" />
      <button>REST-API(동기)</button>
    </div>
  );
}
