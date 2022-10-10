import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentsOptions";

(async () => {
    const BOT = new Client({ intents: IntentOptions });

    BOT.on("ready", () => console.log(client.user?.username, "is ready!"))
    await BOT.login(process.env.BOT_TOKEN);
})();