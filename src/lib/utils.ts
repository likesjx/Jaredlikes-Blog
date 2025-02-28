/**
 * Formats a date string into a readable format
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Creates a readable excerpt from a longer text
 */
export function createExcerpt(text: string, maxLength = 150): string {
  if (text.length <= maxLength) return text;
  
  // Find the last space within the maxLength
  const lastSpaceIndex = text.substring(0, maxLength).lastIndexOf(' ');
  const excerpt = text.substring(0, lastSpaceIndex > 0 ? lastSpaceIndex : maxLength);
  
  return `${excerpt}...`;
}