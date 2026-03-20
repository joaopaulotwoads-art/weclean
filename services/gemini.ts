
export async function getCleaningAdvice(userQuery: string): Promise<string> {
  // Gemini / external AI intentionally disabled.
  // Keep the function so existing imports compile,
  // but always return a simple offline message.
  return "Our AI consultant feature is disabled. Please contact Clean & Shine Services directly for any questions.";
}
