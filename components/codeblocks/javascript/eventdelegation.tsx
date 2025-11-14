import { Example } from "../exampletypes";

export const eventdelegation: Example = {
  code: `document.getElementById('parent').addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        console.log('Button clicked:', event.target.textContent);
    }
});
`,
  language: "jsx",
  filename: "eventdelegation.jsx",
  highlightLines: [1,5],
};
