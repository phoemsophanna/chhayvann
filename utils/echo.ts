import Echo from "laravel-echo";
import Pusher from "pusher-js";

let echo: Echo<any> | null = null;

if (typeof window !== "undefined") {
    // only in browser
    (window as any).Pusher = Pusher;

    echo = new Echo({
        broadcaster: "reverb",
        key: "localkey", 
        wsHost: "api.chhayvann.com.kh",
        wsPort: 443,
        wssPort: 443,
        forceTLS: true, // Crucial for production https
        enabledTransports: ["ws", "wss"],
        disableStats: true,
    });
}

export { echo };
