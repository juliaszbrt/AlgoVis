import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/analyze', async (req, res) => {
  const { code } = req.body;

  // TODO: send to OpenAI, get trace, save trace.json
  const trace = [
    { line: 1, action: 'define_variable', name: 'x', value: 5 },
    { line: 2, action: 'loop_start', condition: 'x < 10' }
  ];

  fs.writeFileSync('../remotion/trace.json', JSON.stringify(trace, null, 2));
  res.json({ message: 'Trace saved!' });
});

app.listen(4000, () => console.log('Server running on http://localhost:4000'));
