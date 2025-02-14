// /pages/api/gptService.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Question, UserContext } from '../types';
import { GPTService } from './gptService';

// Utility function to transform questions
const transformQuestion = (rawQuestion: Question): Question => ({
  text: rawQuestion.text,
  options: rawQuestion.options,
  correctAnswer: rawQuestion.correctAnswer,
  explanation: rawQuestion.explanation,
  difficulty: rawQuestion.difficulty,
  ageGroup: rawQuestion.ageGroup,
  topic: rawQuestion.topic,
  subtopic: rawQuestion.subtopic || '',
  questionType: rawQuestion.questionType || 'conceptual',
});

const gptService = new GPTService();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action } = req.query;

  if (!action) {
    return res.status(400).json({ error: 'Missing action parameter' });
  }

  try {
    if (action === 'getQuestion') {
      if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });

      const { topic, level, userContext } = req.query;

      if (!topic || !level || !userContext) {
        return res.status(400).json({ error: 'Missing required query parameters' });
      }

      const question = await gptService.getPlaygroundQuestion(
        topic as string,
        parseInt(level as string, 10),
        JSON.parse(userContext as string) as UserContext
      );
      return res.status(200).json(transformQuestion(question));
    }

    if (action === 'generateTest') {
      if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

      const { topic, examType } = req.body;

      if (!topic || !examType) {
        return res.status(400).json({ error: 'Missing required parameters' });
      }

      const questions = await gptService.getTestQuestions(topic, examType);
      return res.status(200).json(questions.map(transformQuestion));
    }

    if (action === 'explore') {
      if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });

      const { query, userContext } = req.query;

      if (!query || !userContext) {
        return res.status(400).json({ error: 'Missing required query parameters' });
      }

      const response = await gptService.getExploreContent(query as string, JSON.parse(userContext as string));
      return res.status(200).json(response);
    }

    // If action is not recognized
    return res.status(400).json({ error: 'Invalid action parameter' });
  } catch (error) {
    console.error(`${action} error:`, error);
    return res.status(500).json({ error: `Failed to process ${action}` });
  }
}