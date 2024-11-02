import OpenAI from 'openai';
import 'dotenv/config';

const OPEN_AI_KEY = process.env.OPEN_AI_KEY;
const openai = new OpenAI({ apiKey: OPEN_AI_KEY });

async function Main() {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: 'write a haiku about ai' }],
  });
  console.log(completion);
}

Main();
