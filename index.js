require("dotenv").config();
const client = require("./client/Client");
const loadCommands = require("./components/Commands");
const loadSlashCommands = require("./components/SlashCommands");
const loadEvents = require("./components/Events");
const refreshSlashCommands = require("./plugins/SlashCommands");

loadCommands(client);
loadSlashCommands(client);
loadEvents(client);
refreshSlashCommands(client);

client.login(process.env.TOKEN);

process.on("uncaughtException", (error) => {
  return console.error(error);
});

process.on("unhandledRejection", (error) => {
  return console.error(error);
});

process.on("rejectionHandled", (error) => {
  return console.error(error);
});
