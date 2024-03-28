// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       // Extract message data from the request body
//       const { message } = req.body;

//       // Process the message (e.g., make HTTP request to OpenAI API)
//       // You can use fetch or any HTTP client library to make the request

//       // Example:
//       const response = await fetch(
//         "https://api.openai.com/v1/chat/completions",
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             /* message processing data */
//           }),
//         },
//       );

//       // Handle response from OpenAI API
//       const data = await response.json();

//       // Send processed message back as the API response
//       res.status(200).json({ processedMessage: data });
//     } catch (error) {
//       // console.error("Error processing message:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   } else {
//     res.status(405).end(); // Method Not Allowed
//   }
// }
