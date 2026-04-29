import Echo from "laravel-echo";
import Pusher from "pusher-js";

let echo: Echo<any> | null = null;

if (typeof window !== "undefined") {
    (window as any).Pusher = Pusher;

    echo = new Echo({
        broadcaster: "reverb",

        key: "6hictv4hajt8hpmgzbjg",

        wsHost: "127.0.0.1",
        wsPort: 8080,
        wssPort: 443,

        forceTLS: true,
        enabledTransports: ["ws", "wss"],
    });
}

export { echo };