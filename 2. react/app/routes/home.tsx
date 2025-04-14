import { useNavigate } from "react-router";

export default function Home() {
  const navicate = useNavigate();
  return (
    <div
      onClick={() => {
        navicate("/welcome");
      }}
    >
      Home1
    </div>
  );
}
