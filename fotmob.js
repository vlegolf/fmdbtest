export default async function handler(req, res) {
  const { id } = req.query;
  if (!id) return res.status(400).json({ error: "Missing team ID" });

  const url = `https://www.fotmob.com/api/teams?id=${id}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(data);
  } catch (err) {
    console.error("Fetch failed:", err);
    res.status(500).json({ error: "Failed to fetch from Fotmob" });
  }
}
