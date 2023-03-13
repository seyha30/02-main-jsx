function App() {
  const user = { firstName: "sin", lastName: "seyha" };

  function formatName(user) {
    return user.firstName + "" + user.lastName;
  }
  const myName = <h4>SSEYHA {formatName(user)}</h4>;

  function getGreeting(user) {
    if (user) return <h1>Hello, {formatName(user)}</h1>;
    return <h1>Hello , Strnager .</h1>;
  }

  return (
    // <h1>Hello, World {myName}</h1>
    //  <h1> HI {formatName(user)}</h1>
    <h2> {getGreeting(user)}</h2>
  );
}

export default App;
