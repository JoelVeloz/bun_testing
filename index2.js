Bun.serve({
  fetch(req) {
    return new Response("HI!");
  },
});
