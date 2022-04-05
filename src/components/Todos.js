export default function Todos({ notes, handleClick }) {
  return (
    <ul className="todos-list">
      {notes.map((note) => (
        <li key={note.id}>
          <input checked={note.complete} type="checkbox" onChange={() => handleClick(note)}></input>
          {note.note}
        </li>
      ))}
    </ul>
  );
}
//created a todos list component
// mapping through the notes and creating a check box for each not. On change or upon click it changes the boolean value from false to tru
// why is note.note happening? Is that another way of saying that this specific note holds its note info?
