/* eslint-disable react/prop-types */
import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';

function LoadingWidgt() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({ 
  question, 
  questionIndex,
  totalQuestions,
 }) {
  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.descrition}
        </p>

        <form>
          {question.alternatives.forEach((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label" 
                htmlFor={alternativeId}
              >
                <input 
                  id={alternativeId}
                  typer="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/*<pre>
            {JSON.stringify(question, null, 4)}
          </pre>*/}

          <Button>
            Confirmar
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

export default function QuizPage() {
  const totalQuestions = db.questions.length;
  const questionIndex = 0;
  const question = db.questions[questionIndex];

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        <QuestionWidget 
          question={question} 
          totalQuestions={totalQuestions}
        />
        <LoadingWidgt />
      </QuizContainer>
    </QuizBackground>
  );
}
