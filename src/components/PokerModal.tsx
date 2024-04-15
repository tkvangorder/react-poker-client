import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PokerModal = (props: Props) => {
  return (
    <div className="justify-center top-0 left-0 items-center fixed flex bg-base-300 bg-opacity-90 w-full h-full">
      <div className="flex justify-center rounded-xl border-2 border-primary items-center bg-base-100">
        {props.children}
      </div>
    </div>
  );
};

export default PokerModal;
