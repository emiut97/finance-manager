import "./WalletList.css";
import WalletListItem from "./WalletListItem";
const WalletList = ({ items }) => {
  return (
    <div
      id="WalletList"
      className="list-group mt-3 mb-5 WalletList-container borderless px-2 py-2"
    >
      {/* {<h1 className="WalletList-H1 farsiestb">مدیریت کیف پول</h1>} */}
      {items.map((item) => (
        <WalletListItem
          itemKey={item.itemKey}
          itemName={item.itemName}
          itemColor={item.itemColor}
          itemDate={item.itemDate}
        />
      ))}
    </div>
  );
};

export default WalletList;
