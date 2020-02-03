import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./router/router.ts";
const app = new Application();
app.use((ctx, next) => {
  console.log(ctx.request.method, ctx.request.url);
  console.log(Deno.cwd(), "ver path actual");
  next();
});

app.use(router.routes());
try {
  await app.listen("127.0.0.1:4000");
} finally {
  console.log("server on port 3000");
}
