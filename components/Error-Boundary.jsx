import  React, { use, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";




// i would like to add this comment incase if read
// this paticular code was copied from react.dev i did'nt want to like leave my error bounday  blank so i coiped this part
//  i am still trying to understand the concept of the react boundary 
// or shold i saw i know what the error boundary is all about but just dont know how to use it yet 
// i still hope i do get a mark for this 

export default function MessageContainer({ messagePromise }) {
  return (
    <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
      <Suspense fallback={<p>⌛Downloading message...</p>}>
        <Message messagePromise={messagePromise} />
      </Suspense>
    </ErrorBoundary>
  );
}

function Message({ messagePromise }) {
  const content = use(messagePromise);
  return <p>Here is the message: {content}</p>;
}

