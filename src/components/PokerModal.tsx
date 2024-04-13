import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PokerModal = (props: Props) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer"></div>
      <button> X </button>
      <div className="title">Fred Was Here</div>
      <div className="body">{props.children}</div>
    </div>
  );
};

export default PokerModal;
