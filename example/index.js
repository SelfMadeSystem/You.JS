import { search } from "you.js";
import "dotenv/config";

const echo = console.log.bind(console); // I can't be arsed to type console.log

try {
    search("", process.env.YOU_API_KEY).then(async (a) => {
        echo(a);
        echo(a.hits[0].snippets);
    });
} catch (e) {
    echo(e);
}