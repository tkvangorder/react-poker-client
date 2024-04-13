import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PokerModal = (props: Props) => {
  return (
    <div className="justify-center top-0 left-0 items-center fixed flex bg-slate-500 bg-opacity-80 w-full h-full">
      <div className="modalContainer">
        <div className="title">Fred Was Here</div>
        <div className="body">{props.children}</div>
      </div>
    </div>
  );
};

export default PokerModal;
