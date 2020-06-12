import { Application } from 'https://deno.land/x/oak/mod.ts';
import { router } from './router.ts';

const app = new Application();
const port = 3000;

app.use(async (ctx, next) => {
    await next();
    console.log(`${ctx.request.method} ${ctx.request.url}`);
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port });
console.log(`localhost:${port}`);