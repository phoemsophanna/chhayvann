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
        wsPort: 8080,
        wssPort: 8080,
        forceTLS: true,
        enabledTransports: ['ws', 'wss'],
        disableStats: true,
    });
}

export { echo };
