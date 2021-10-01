import { useState, useReducer } from "react";
import Modal from "./Model";
import { data } from "../../data";

//reducer function

const Index = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);
  const [showModel, setShowModel] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModel(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName("");
    } else {
      setShowModel(true);
    }
  };

  return (
    <>
      {showModel && <Modal />}
      <form className="form" onSubmit={handlesubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
