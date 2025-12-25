import server from "./index.js";
const PORT = process.env.PORT || 3200;

server.listen(PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
