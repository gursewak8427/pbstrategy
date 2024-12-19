export function extractBrandStatement(prompt) {
  const brandStatementRegex = /<brandStatement>(.*?)<\/brandStatement>/s;

  const match = prompt.match(brandStatementRegex);
  if (match && match[1]) {
    return match[1].trim(); // Return the content within the tags, trimmed of extra whitespace
  }

  return null;
}
