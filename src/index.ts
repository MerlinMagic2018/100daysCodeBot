import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentsOptions";
import { connectDatabase } from "./database/connectDatabase"
import { validateEnv } from "./utils/validateEnv"

(async () => {
    if (!validateEnv()) return;

    const client = new Client({ intents: IntentOptions });

    client.on("ready", () => console.log(client.user?.username, "is ready!"));
    client.on("message", async (message) => await onMessage(message));
    await connectDatabase();
    await client.login(process.env.BOT_TOKEN);
})();