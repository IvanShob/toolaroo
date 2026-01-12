export default function handler(req, res) {
  res.status(200).json({
    tools: [
      { name: "AI Writer", description: "Generates text based on prompts." },
      { name: "ImageAI", description: "Creates images from text." }
    ]
  });
}
