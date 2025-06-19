import * as functions from "firebase-functions";
import fetch from "node-fetch";

interface VerificationResponse {
  success: boolean;
  score: number;
  action: string;
  hostname: string;
}

export const verifyCaptcha = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // CORS preflight
    res.status(204).send("");
    return;
  }

  const token = req.body.token;
  const secret = process.env.RECAPTCHA_SECRET;

  if (!token) {
    res.status(400).send({ success: false, message: "No token provided" });
    return;
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secret}&response=${token}`,
      },
    );

    const data = (await response.json()) as VerificationResponse;

    res.status(200).send({
      success: data.success,
      score: data.score,
      action: data.action,
    });
  } catch (err) {
    res.status(500).send({ success: false });
  }
});
