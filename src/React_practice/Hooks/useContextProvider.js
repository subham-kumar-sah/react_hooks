import UseContextConsumer from "./useContextConsumer";
import Producer from "./producerCode";

function UseContextProvider() {
  return (
    <Producer>
      <UseContextConsumer />
    </Producer>
  );
}

export default UseContextProvider;
