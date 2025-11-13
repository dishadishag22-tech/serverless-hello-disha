// netlify/functions/hello.js
exports.handler = async function(event, context) {
  const name = "Disha G"; // Replace with your Full Name or USN if required

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: `Hello from serverless function! - ${name}`,
      student: name,
      timestamp: new Date().toISOString(),
      source: "Netlify Function"
    })
  };
};

