import express from 'express';

const app = express();

const PORT = process.env.PORT || 4000

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'backend',
    timestamp: new Date().toISOString()
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})