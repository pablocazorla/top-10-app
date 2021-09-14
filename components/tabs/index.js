import { useState, useEffect } from "react";
import classnames from "classnames";

const Tabs = ({ tabs = [], initialTab = 0, onChangeTab = () => {} }) => {
  const [current, setCurrent] = useState(initialTab);

  useEffect(() => {
    setCurrent(initialTab);
  }, [initialTab]);

  return (
    <div className="tabscomp">
      <div className="tabscomp__header align-items-end">
        {tabs.map((tab, k) => {
          return (
            <div
              className={classnames("tabscomp__header-tab", {
                current: current === k,
              })}
              key={k}
              onClick={() => {
                setCurrent(k);
                onChangeTab(k);
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
