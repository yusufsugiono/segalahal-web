const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    host: "localhost",
    port: 5000,
  });

  server.route([
    {
      path: "/",
      method: "GET",
      handler: () => {
        return "<h1>Halo, Pembaca SegalaHal!</h1>";
      },
    },
  ]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
