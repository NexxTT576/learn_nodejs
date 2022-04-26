import { useParams, useSearchParams } from "react-router-dom";
function About() {
  // const [params] = useSearchParams();
  // // params是一个对象 对象里有一个get的方法
  // // 用来获取对应的参数
  // // 把参数的名称作为get方法的实参传过来
  // const id = params.get("id");
  // const name = params.get("name");
  // return (
  //   <div>
  //     About 得到的参数id值为{id} name为{name}
  //   </div>
  // );
  const params = useParams();
  return <div>About 得到的参数id值为 {params.id}</div>;
}
export default About;
