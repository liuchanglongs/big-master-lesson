import { useNavigate } from "react-router";
import Page from "@/page/01. Ref";

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
