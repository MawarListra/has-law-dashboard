export type TItemTabs = {
  key: string | number;
  label: string;
  disabled?: boolean;
};

interface TabsProps {
  activeKey: string | number;
  items: TItemTabs[];
  onChange?: (activeKey: string | number) => any;
}

function Tabs({ activeKey, items, onChange }: TabsProps) {
  return (
    <div
      className="overflow-x-auto overflow-y-hidden whitespace-nowrap text-center text-base"
      id="container"
    >
      <ul className="-mb-px flex">
        {items.map((el) => {
          const isChangeable = activeKey !== el.key && !el.disabled;

          return (
            <li
              key={el.key}
              className="mr-12 border-b-2"
              onClick={() => {
                if (isChangeable) onChange?.(el.key);
              }}
            >
              <span
                className={`${
                  isChangeable ? "cursor-pointer" : "cursor-default"
                } border-b-2 border-solid ${
                  activeKey === el.key
                    ? "border-ui-blue text-ui-blue"
                    : "border-ui-blue/0"
                }`}
              >
                {el.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tabs;
