/* Higher Order Component */
/* Memo là 1 HOC bảo vệ component không bị rerender khi props không thay đổi! */
import {memo} from 'react';
import { Prop } from '@/pages/products/Product';

const Test = (data: Prop)  => {
  const {count, handlePrintCount} = data;

  console.log("rerender Test Component")
  return (
    <div>
      hello test {count}
      <div>
        <button onClick={() => {
          handlePrintCount(count)
        }}>Thử</button>
      </div>
    </div>
  )
}

export default memo(Test)
