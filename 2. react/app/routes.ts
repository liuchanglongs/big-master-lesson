/**
 * @Author: lcl
 * @Date: 2025/4/14
 */
import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { Welcome } from "./welcome/welcome";

export default [
  index("routes/home.tsx"),
  route("/welcome", "./welcome/welcome.tsx"),
] satisfies RouteConfig;
