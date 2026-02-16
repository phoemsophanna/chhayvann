import Echo from "laravel-echo";
import Pusher from "pusher-js";

let echo: Echo<any> | null = null;

if (typeof window !== "undefined") {
    // only in browser
    (window as any).Pusher = Pusher;

    echo = new Echo({
        broadcaster: "pusher",
        key: "f0fa2fba948713a9aa3f",
        cluster: "ap1", 
        forceTLS: true,
    });
}

export { echo };
