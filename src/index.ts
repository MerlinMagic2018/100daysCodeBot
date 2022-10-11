import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentsOptions";
import { connectDatabase } from "./database/connectDatabase"
import { onInteraction } from "./events/onInteraction";
import { validateEnv } from "./utils/validateEnv"

(async () => {
    if (!validateEnv()) return;

    const client = new Client({ intents: IntentOptions });

    client.on("ready", () => console.log(client.user?.username, "is ready!"));
    client.on("interactionCreate",
    async (interaction) => await onInteraction(interaction));
    await connectDatabase();
    await client.login(process.env.BOT_TOKEN);
})();