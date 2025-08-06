**I used Claude Code (version 1.0.67) to generate a simple website for me. Here is a history of my prompts:**

1. what do you find in this project? (There was only suggested_design.txt)
2. Ignore my_prompt_history.md and README.md files 
3. Generate a project scaffold for a static React site based on the design spec in suggested_design.txt, while considering the following: 
   * The company name is Data Precision, and the email address is info@dataprecision.com.au. It is located in Adelaide, SA, and has a post box of "PO Box 3244 Rostrevor, SA 5073". Make sure you don't add made-up contact information.
   * Use typescript as the language and Vite with React Router v6.
   * Show me the folder structure, the package.json, and any basic scripts (dev, build, preview).
   * Use ES modules, and include Tailwind CSS.
   * The background image and company logo can be found in directory "images" 

Now install dependencies from package.json by: "npm install"

For preview: "npm run dev" 

**Claude Code prompts cont.**

4. Link navigation opens pages at the bottom, not at the top. Can you fix it?

For generating output (./dist) for deployment one can run "npm run build". But we don't need it as we deploy in Vercel, which does the build for us.

**Claude Code prompts cont.**

5. Generate a vercel.json for deploying this site on Vercel.
6. Make the required changes to the project so that the form in Contact page is sent to my email. Use Vercel Serverless Functions + Nodemailer. 

I noticed that pushes to my git repository does not trigger a redeployment. So created a Webhook in Vercel and added that to my git repo. 
