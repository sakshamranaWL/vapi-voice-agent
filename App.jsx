import { useEffect } from "react";
import { Vapi } from "@vapi-ai/web";

function App() {
  useEffect(() => {
    const vapi = new Vapi();

    vapi.connect({
      apiKey: "32380f2f-c9a9-4e2b-91e9-16dc79588606",
      agentId: "35da5bb1-44f6-467b-9e48-f61fdb07c493",
    });

    vapi.on("transcript", (transcript) => {
      console.log("You said:", transcript.text);
    });

    vapi.on("response", (response) => {
      console.log("Bot responded:", response.text);
    });

    // Optional: Start automatically
    // vapi.start()
  }, []);

  return (
    <div>
      <h1>🎙️ VAPI Voice Assistant</h1>
      <button onClick={() => window.vapi?.start()}>Start Talking</button>
      <button onClick={() => window.vapi?.stop()}>Stop</button>
    </div>
  );
}

export default App;
