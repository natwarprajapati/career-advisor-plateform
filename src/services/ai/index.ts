// Static AI Service Singleton & Factory
import { IAIService } from './ai.interface';
import { MockAIService } from './mockAI.service';

const staticService = new MockAIService();

export const getAIService = (): IAIService => {
  return staticService;
};

export const aiService: IAIService = staticService;

export * from './ai.interface';

