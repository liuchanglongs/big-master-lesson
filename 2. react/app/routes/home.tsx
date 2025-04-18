import { useNavigate } from "react-router";
// import Page from "@/page/01. Ref";
// import Page from "@/page/02. 传值";
import Page from "@/page/03.老生命周期";

export default function Home() {
  const navicate = useNavigate();
  return (
    // <div
    //   onClick={() => {
    //     navicate("/welcome");
    //   }}
    // >
    //   Home1
    // </div>
    <div>
      <Page></Page>
    </div>
  );
}
