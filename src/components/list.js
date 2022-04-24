export default function list({ info, upcoming }) {
  console.log(upcoming);
  return <ul>{iterate(info, upcoming)}</ul>;
}

function iterate(data, flag) {
  if (!data) return;
  const bgColor = flag ? { backgroundColor: "#ffe66d" } : {};
  return data.map((person, index) => {
    const text = person.birthday;
    const regexpLastWord = /[0-9]*/;
    // console.log("+++++++");
    // console.log(Old(text.match(regexpLastWord)[0]));

    return (
      <li key={index}>
        <div className="flex" style={bgColor}>
          <img src={person.img} alt="img" />
          <div className="title">
            <h3 className="name">{person.name}</h3>
            <h5 className="age">Age {Old(text.match(regexpLastWord)[0])}</h5>
          </div>
        </div>
      </li>
    );
  });
}

function Old(personAge) {
  //let year = new Date(personAge).getFullYear;
  let actualYear = new Date().getFullYear();
  return actualYear - personAge;
}
