import  { useState} from 'react';

type CardProps = { 
  words: any[];
}

const TestCard = ({words} : CardProps ) : JSX.Element =>  {

  
  // Type for the word object 
  // type word = { 
  //   id: number;
  //   word: string;
  //   pos: string;
  // }

  // const [currentQuestion, setCurrentQuestion] = useState(0);

  // console.log(currentQuestion)


  return (
    <section>
        <h1>Geuss The Part of speech of the given word</h1>
        <p>0</p>
        {/* <ul>
          {words.map((word: word) => <li key={word.id}>{word.word}</li>)}
        </ul> */}
    </section>
  )
}

export default TestCard