interface prop {
  title: string;
  description: string;
  id: number;
}
const NotesList = (props: prop) => {
  return (
    <div
      className="hover:bg-[#E4F1FC]   border-[0.1px] border-black "
      key={props.id}
    >
      <div className="flex flex-row pt-1 my-3 px-2">
        <div className="image w-12 h-12 bg-[#9597aa] rounded-md "></div>
        <div className="mx-2">
          <h1 className="font-semibold text-md">{props.title}</h1>
          <h1 className="text-sm">{props.description}</h1>
        </div>
      </div>
    </div>
  );
};
export default NotesList;
