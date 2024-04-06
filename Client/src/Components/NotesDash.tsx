import LeftNavbar1 from "./LeftNavbar1";
import AllNotes from "./AllNotes";
const NotesDash = () => {
  return (
    <div className="flex flex-row bg-black">
      <LeftNavbar1 />
      <AllNotes />
    </div>
  );
};
export default NotesDash;
