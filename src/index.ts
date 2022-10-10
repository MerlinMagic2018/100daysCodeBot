import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentsOptions";
import { connectDatabase } from "./database/connectDatabase"

(async () => {
    const client = new Client({ intents: IntentOptions });

    await client.on("ready", () => console.log(client.user?.username, "is ready!"))
    await connectDatabase()
    await client.login(process.env.BOT_TOKEN);
})();