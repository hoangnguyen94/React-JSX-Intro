const App = () =>
{
  return (
    <div>
      <Person
        name="Bently"
        age={34}
        hobbies={[ "Track", "Run", "Sleep" ]}
      />
      <Person name="Anthony" age={44} hobbies={[ "writing", "reading" ]} />
      <Person
        name="Monica"
        age={22}
        hobbies={[ "ice skating", "business" ]}
      />
      <Person
        name="Alen"
        age={8}
        hobbies={[ "piano", "yoga", "healthy food" ]}
      />
    </div>
  );
};