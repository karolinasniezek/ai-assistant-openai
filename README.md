# AI Embedding Assistent

AI Embedding Assistant is a React.js application that converts text inputs into vector embeddings. 
These embeddings represent the semantic meaning of the text, enabling applications to perform tasks like text similarity, search, clustering, and classification. 
This tool is powered by OpenAI’s powerful API and integrates with the React frontend for an user experience.

## Features
- Text to Embeddings
- Simple interaction
- User-friendly UI
- Real-time responses

## Technologies used

- `React.js`
- `Node.js`,
- `Express.js`
- `OpenAI API`
- `Css modules`

## Installation

### Prerequisites

- `Node.js`

### Steps:

Clone the repository

`git clone https://github.com/karolinasniezek/ai-assistant-openai.git`

Navigate to the project

`cd ai-assistent`

Install dependencies

`npm install`

Create `.env` file with your `OpenAI API Key`

`OPENAI_API_KEY=your_openai_api_key`

Start the application

`npm run start:frontend`
`npm run start:backend`

### Usage

Once the application is running, visit `http://localhost:3000`. The interface will prompt users to enter a text, and upon clicking the `Submit` button, the corresponding text embeddings will be generated using OpenAI’s model. 
The embeddings will be displayed in real-time on the page.

### Example:
Input: `fox jump over chilled dog`

Output: The corresponding vector representation (embedding) will be shown in the UI, which is a list of floating-point numbers.

https://github.com/user-attachments/assets/afb4ecb6-a599-4c7c-8645-2da6ab1e763e

### Why Generate Embeddings?

Embeddings are essential for natural language processing (NLP) tasks such as:
- Text Similarity
- Machine Learning Models

### API Flow
- The user inputs text in the frontend.
- The backend sends this text to the OpenAI API.
- OpenAI returns the generated embeddings as a response.
- These embeddings are displayed on the frontend in real-time.

### Key Concepts
- `Embeddings` High-dimensional vectors that capture the semantic meaning of text.
- `OpenAI API` A powerful API for generating text embeddings and other NLP tasks.
- `React.js` A JavaScript library used for building the user interface, providing a dynamic and responsive application.
- `Node.js` and `Express.js` Backend technologies used for handling requests and integrating with external APIs.
