import { Skeleton, Button } from "antd";

export default function LoadingComponent() {
  return <h4>loading ...
       <Skeleton loading={true} block={true}/>
  </h4>;
}
