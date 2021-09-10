import { useState } from "react";
import classnames from "classnames";

const Tabs = ({ tabs = [] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="tabscomp">
      <div className="tabscomp__header">
        {tabs.map((tab, k) => {
          return (
            <div
              className={classnames("tabscomp__header-tab", {
                current: current === k,
              })}
              key={k}
              onClick={() => {
                setCurrent(k);
              }}
            >
              {tab.title}
            </div>
          );
        })}
      </div>
      <div className="tabscomp__body">{tabs[current].content}</div>
    </div>
  );
};
export default Tabs;
