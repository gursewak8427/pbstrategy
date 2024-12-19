// Good Prompt, but its long, due to my free tier API limit, its not work, but you can use
// export const getSystemPrompt = () =>
//   `Generate a professional brand statement based on the following user data. The user is a Marketing Manager with strengths in Leadership, Strategy, and Problem Solving. Their key skill is Strategic Planning, and their core value is Innovation. The statement should be concise, impactful, and tailored for a professional platform like LinkedIn. The format should follow: 'I am a [strength] professional who excels in [skill], committed to [value], and known for [unique trait].' The unique trait should reflect the user's strengths in leadership, strategy, and problem-solving. Return the final brand statement in the following format: <brandStatement>Here is the brand statement</brandStatement>.`;

// export const getSystemPrompt = () =>
//   `Generate a professional brand statement for a Marketing Manager skilled in Leadership, Strategy, and Problem Solving. The statement should follow this format: 'I am a <b>[strength]</b> professional who excels in <b>[skill]</b>, committed to <b>[value]</b>, and known for <b>[unique trait]</b>.' Reflect their leadership, strategic thinking, and problem-solving skills in the unique trait. Return the brand statement within <brandStatement> tags. it is important tags - <brandStatement>`;

export const getSystemPrompt = () =>
  `Generate a professional brand statement using the user's role, strengths, skills, values, and unique traits. Format: 'I am a <b>[role]</b> who excels in <b>[skills]</b>, committed to <b>[values]</b>, and known for <b>[unique trait]</b>.' Highlight key points in <b>bold</b> or <i>italic</i>. Adjust if fields are missing. Wrap the result in <brandStatement> tags. 
  IMPORTANT : Don't use double stars, i need html, not text.
`;
