import { useState } from "react";
import Child1 from "../../src/components/units/14-lifting-state-up/Child1";
import Child2 from "../../src/components/units/14-lifting-state-up/Child2";

export default function LiftingStateUpPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child1 count={count} setCount={setCount} />
      <hr />
      <Child2 count={count} setCount={setCount} />
    </>
  );
}
