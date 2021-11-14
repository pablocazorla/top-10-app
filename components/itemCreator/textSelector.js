import { useState, useEffect, useCallback, useRef } from "react";
import classnames from "classnames";

const TextSelector = ({
  data,
  collection,
  focus,
  onChange,
  value = "",
  limit = 3,
  placeholder,
}) => {
  const inputRef = useRef(null);

  const [filteredCollection, setFilteredCollection] = useState(collection);
  const [showCollection, setShowCollection] = useState(false);
  const [focused, setFocused] = useState(false);
  const [focusedToEnterId, setFocusedToEnterId] = useState(0);

  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
    }
  }, [focus]);

  useEffect(() => {
    if (value.length >= limit) {
      const listNews = [];
      if (data && data.items) {
        for (let idItem in data.items) {
          if (data.items[idItem].isNew) {
            listNews.push({
              name: data.items[idItem].name,
              editorial: data.items[idItem].editorial,
              price: data.items[idItem].price,
              isNew: true,
            });
          }
        }
      }
      const filteredCollectionOptions = collection
        .concat(listNews)
        .filter((g) => {
          return g.name.toLowerCase().indexOf(value.toLowerCase()) >= 0;
        });
      setFilteredCollection(filteredCollectionOptions);
    } else {
      setFilteredCollection([]);
    }
  }, [value, collection, data]);

  const onKeyPress = useCallback(
    (e) => {
      if (e.keyCode === 13 && focused && filteredCollection.length >= 1) {
        inputRef.current.blur();
        onChange(
          filteredCollection[focusedToEnterId],
          filteredCollection.length
        );
      }
    },
    [focused, filteredCollection, focusedToEnterId, onChange]
  );
  const onKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 9 && focused && filteredCollection.length >= 1) {
        inputRef.current.blur();
        onChange(
          filteredCollection[focusedToEnterId],
          filteredCollection.length
        );
      }
      if (focused && filteredCollection.length > 1) {
        if (e.keyCode === 38) {
          e.preventDefault();
          const newfocusedToEnterIdUp = focusedToEnterId - 1;
          if (newfocusedToEnterIdUp >= 0) {
            setFocusedToEnterId(newfocusedToEnterIdUp);
          }
        }
        if (e.keyCode === 40) {
          e.preventDefault();
          const newfocusedToEnterIdDown = focusedToEnterId + 1;
          if (newfocusedToEnterIdDown <= filteredCollection.length - 1) {
            setFocusedToEnterId(newfocusedToEnterIdDown);
          }
        }
      }
    },
    [focused, filteredCollection, focusedToEnterId, onChange]
  );

  useEffect(() => {
    if (window) {
      window.addEventListener("keypress", onKeyPress);
    }
    return () => {
      if (window) {
        window.removeEventListener("keypress", onKeyPress);
      }
    };
  }, [onKeyPress]);

  useEffect(() => {
    if (window) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      if (window) {
        window.removeEventListener("keydown", onKeyDown);
      }
    };
  }, [onKeyDown]);

  return (
    <div className="text-selector">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        ref={inputRef}
        onFocus={() => {
          setFocusedToEnterId(0);
          setFocused(true);
          setShowCollection(true);
        }}
        onBlur={() => {
          setFocused(false);
          setTimeout(() => {
            setShowCollection(false);
          }, 400);
        }}
        onChange={(e) => {
          onChange({ name: e.target.value }, filteredCollection.length);
        }}
      />
      {filteredCollection.length > 0 && showCollection ? (
        <div className="text-selector-pad">
          {filteredCollection.map((g, k) => {
            return (
              <div
                className={classnames("text-selector-item", {
                  focusedToEnterId: focusedToEnterId === k,
                })}
                key={k}
                onClick={() => {
                  onChange(g, filteredCollection.length);
                }}
              >
                {g.name}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
export default TextSelector;
