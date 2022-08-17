import { createContext, useReducer } from 'react';
import { shuffleAnswers } from '../Admin/DetailedQuiz/helpers';
// import questions from "../Admin/Quiz/quiz-data";
import questions from '../Admin/DetailedQuiz/quiz-data';

const initialState = {
    questions,
    currentQuestionIndex: 0,
    currentAnswer: '',
    answers: shuffleAnswers(questions[0]),
    showResults: false,
    correctAnswersCount: 0,
};

const reducerQuiz = (state, action) => {
    const newState = { ...state };
    switch (action.type) {
    case 'SELECT_ANSWER': {
        const correctAnswersCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
            ? state.correctAnswersCount + 1
            : state.correctAnswersCount;
        return {
            ...state,
            currentAnswer: action.payload,
            correctAnswersCount,
        };
    }
    case 'NEXT_QUESTION': {
        const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
        const currentQuestionIndex = showResults
            ? state.currentQuestionIndex
            : state.currentQuestionIndex + 1;
        const answers = showResults
            ? []
            : shuffleAnswers(state.questions[currentQuestionIndex]);
        return {
            ...state,
            currentAnswer: '',
            showResults,
            currentQuestionIndex,
            answers,
        };
    }
    case 'PREV_QUESTION': {
        const currentQuestionIndex = state.currentQuestionIndex - 1;

        return {
            ...state,
            currentAnswer: '',

            currentQuestionIndex,
        };
    }
    case 'LATEST': {
        return initialState;
    }
    case 'RESTART': {
        return initialState;
    }
    default:
        return newState;
    }
};

export const DetailedQuizContext = createContext();

export const DetailedQuizProvider = ({ children }) => {
    const value = useReducer(reducerQuiz, initialState);
    return (
        <DetailedQuizContext.Provider value={value}>
            {children}
        </DetailedQuizContext.Provider>
    );
};
