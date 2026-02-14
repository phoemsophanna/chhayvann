import Echo from "laravel-echo";
import Pusher from "pusher-js";

let echo: Echo<any> | null = null;

if (typeof window !== "undefined") {
    // only in browser
    (window as any).Pusher = Pusher;

    echo = new Echo({
        broadcaster: "reverb",
        key: "localkey",
        wsHost: "194.233.81.255",
        wsPort: 8080,
        forceTLS: false,
    });
}

export { echo };
