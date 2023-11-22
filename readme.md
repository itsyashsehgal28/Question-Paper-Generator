# Question Paper Generator

This Node.js application generates a question paper based on user-defined parameters and a dataset of questions stored in a JSON file.

## Setup

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

## Install Dependencies

npm install process , process.argv

## Usage

Run the application with the following command, providing the necessary input arguments:

    node index.js <total_marks> <percent1> <level1> <percent2> <level2> <percent3> <level3>

<total_marks>: Total marks for the question paper (integer, greater than or equal to 10 and less than or equal to 100).
<percent1>, <percent2>, <percent3>: Percentages for Easy, Medium, and Hard difficulty levels respectively.
<level1>, <level2>, <level3>: Difficulty level names (e.g., "Easy", "Medium", "Hard").

    Example: node index.js 100 20 Easy 40 Medium 40 Hard

## Basic Cases Handled

    The application ensures that the total marks for the question paper are within the valid range (greater than 10 and less than or equal to 100).

    If the dataset of questions is not available or is invalid (not an array), the program exits with an error message.

    The total percentage of questions (sum of percentages for each difficulty level) must be exactly 100%. Otherwise, an error message is displayed, and the program exits.

## Data Structure

The application uses a dataset of questions stored in data.json. Each question has the following attributes:

    id: Unique identifier for the question.
    question: Text of the question.
    subject: Subject of the question.
    topic: Topic related to the question.
    difficulty: Difficulty level of the question (e.g., "Easy", "Medium", "Hard").
    marks: Marks assigned to the question.


    "questions": [
    {
      "id": 1,
      "question": "What is the speed of light?",
      "subject": "Physics",
      "topic": "Waves",
      "difficulty": "Easy",
      "marks": 5
    },
    // ... other questions
    ]

## Result

The generated question paper and the total marks will be displayed in the console.

    console.log(finalPaper);
    console.log(total);

## Code Structure

    index.js: Main application file for generating the question paper.
    data.json: Dataset containing the questions.

Feel free to explore and extend this application based on future requirements.
