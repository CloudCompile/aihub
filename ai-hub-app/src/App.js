import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import { Button } from "./components/ui/button";
import { Globe, Moon, Sun } from "lucide-react";

const links = {
  chat: [
    { name: "ChatGPT", url: "https://chat.openai.com" },
    { name: "Claude", url: "https://claude.ai" },
    { name: "Gemini (Bard)", url: "https://gemini.google.com" },
    { name: "You.com", url: "https://you.com" },
    { name: "Perplexity", url: "https://www.perplexity.ai" },
  ],
  image: [
    { name: "Krea AI", url: "https://krea.ai" },
    { name: "Runway ML", url: "https://runwayml.com" },
    { name: "Hugging Face Spaces", url: "https://huggingface.co/spaces" },
  ],
  voice: [
    { name: "ElevenLabs (TTS)", url: "https://elevenlabs.io" },
  ],
  fun: [
    { name: "Character.AI", url: "https://character.ai" },
  ],
};

export default function AIHubApp() {
  const [darkMode, setDarkMode] = useState(true);
  const [search, setSearch] = useState("");

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <main
      className={`min-h-screen p-6 transition-colors duration-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-cyan-400">🧠 AI Central Hub</h1>
        <Button onClick={toggleDarkMode} variant="outline">
          {darkMode ? <Sun className="mr-2" /> : <Moon className="mr-2" />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>

      <input
        type="text"
        placeholder="Search AIs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md mb-4 p-2 rounded-md border border-cyan-400 text-black"
      />

      <Tabs defaultValue="chat" className="w-full max-w-5xl mx-auto">
        <TabsList className="grid grid-cols-4 bg-cyan-900 text-white mb-4">
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="image">Image</TabsTrigger>
          <TabsTrigger value="voice">Voice</TabsTrigger>
          <TabsTrigger value="fun">Fun</TabsTrigger>
        </TabsList>

        {Object.entries(links).map(([category, tools]) => (
          <TabsContent key={category} value={category}>
            <div className="grid gap-4 md:grid-cols-2">
              {tools
                .filter(({ name }) =>
                  name.toLowerCase().includes(search.toLowerCase())
                )
                .map(({ name, url }) => (
                  <Card key={name} className="bg-cyan-950 hover:shadow-lg">
                    <CardContent className="p-4 flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-semibold text-cyan-200">{name}</h3>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:underline"
                        >
                          {url.replace("https://", "")}
                        </a>
                      </div>
                      <Button asChild variant="outline" className="text-cyan-300 border-cyan-500">
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          <Globe className="mr-2" /> Visit
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}
