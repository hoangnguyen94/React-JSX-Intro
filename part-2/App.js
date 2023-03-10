const App = () =>
{
  return (
    <div>
      <Tweet
        name="Henry Nguyen"
        username="henrying"
        date={new Date().toDateString()}
        message="I can make a react."
      />
      <Tweet
        name="Natalie"
        username="natalia"
        date={new Date().toDateString()}
        message="What a react!!"
      />
      <Tweet
        name="Teenager"
        username="teen"
        date={new Date().toDateString()}
        message="Let do it"
      />
    </div>
  );
};