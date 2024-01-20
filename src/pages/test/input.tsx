import React from "react";
import Head from "next/head";

import InputField from "@/components/ui/Form/Input/InputField";
import InputSearch from "@/components/ui/Form/Input/InputField/Search";
import InputSelect from "@/components/ui/Form/Input/InputSelect";
import RadioButtonCheckedIcon from "@/components/ui/Icons/radio-button-checked-icon";

function TestInputPage() {
  const testSelectOption = [
    { value: "2018", label: "2018" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
    { value: "2026", label: "2026" },
    { value: "2027", label: "2027" },
  ];

  const testSelectOptionAnother = [{ value: "input_date", label: "Tanggal" }];

  return (
    <React.Fragment>
      <Head>
        <title>Test Input</title>
        <meta name="description" content="Test Input" />
      </Head>

      <div className="p-2">
        <div className="mb-2">
          <h2 className="text-2xl">Input Size</h2>
          <div className="mt-2 grid grid-flow-row grid-cols-3 gap-2">
            <div className="col-span-full md:col-auto">
              <InputField
                name="input-small"
                placeholder="Small"
                size="small"
                readOnly
              />
            </div>
            <div className="col-span-full md:col-auto">
              <InputField name="input-default" placeholder="Default" readOnly />
            </div>
            <div className="col-span-full md:col-auto">
              <InputField
                name="input-large"
                placeholder="Large"
                size="large"
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="mb-2">
          <h2 className="text-2xl">
            Input Icon (Clickable)&nbsp;
            <code className="text-sm text-[#9e01ff]">SEE BROWSER CONSOLE</code>
          </h2>
          <div className="mt-2 grid grid-flow-row grid-cols-3 gap-2">
            <div className="col-span-full md:col-auto">
              <InputField
                name="input-icon-small"
                placeholder="Icon Small"
                size="small"
                iconLeft={<RadioButtonCheckedIcon />}
                onClickLeft={() => console.log("Left Icon Clicked")}
                readOnly
              />
            </div>
            <div className="col-span-full md:col-auto">
              <InputField
                name="input-icon-default"
                placeholder="Icon Default"
                iconLeft={<RadioButtonCheckedIcon />}
                iconRight={<RadioButtonCheckedIcon />}
                onClickLeft={() => console.log("Left Icon Clicked")}
                onClickRight={() => console.log("Right Icon Clicked")}
                readOnly
              />
            </div>
            <div className="col-span-full md:col-auto">
              <InputField
                name="input-icon-large"
                placeholder="Icon Large"
                size="large"
                iconRight={<RadioButtonCheckedIcon />}
                onClickRight={() => console.log("Right Icon Clicked")}
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="mb-2">
          <h2 className="text-2xl">Input Search</h2>
          <div className="mt-2 grid grid-flow-row grid-cols-3 gap-2">
            <div className="col-span-full md:col-auto">
              <InputSearch
                name="search-small"
                placeholder="Search Small"
                size="small"
                readOnly
              />
            </div>
            <div className="col-span-full md:col-auto">
              <InputSearch
                name="search-default"
                placeholder="Search Default"
                readOnly
              />
            </div>
            <div className="col-span-full md:col-auto">
              <InputSearch
                name="search-default"
                placeholder="Search Large"
                size="large"
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="mb-2">
          <h2 className="text-2xl">
            Input Select{" "}
            <code className="text-sm text-[#ff3363] underline">
              <a
                href="https://react-select.com/home"
                target="_blank"
                rel="noopener"
              >
                Powered by React Select
              </a>
            </code>
          </h2>
          <div className="mt-2 grid grid-flow-row grid-cols-3 gap-2">
            <div className="col-span-full md:col-auto">
              <InputSelect
                name="input-select-small"
                option={testSelectOption}
                placeholder="Small"
                size="small"
              />
            </div>
            <div className="col-span-full md:col-auto">
              <InputSelect
                name="input-select-default"
                option={testSelectOption}
                placeholder="Default"
              />
            </div>
            <div className="col-span-full md:col-auto">
              <InputSelect
                name="input-select-large"
                option={testSelectOption}
                placeholder="Large"
                size="large"
              />
            </div>
          </div>
        </div>
        <div className="mb-2">
          <h2 className="text-2xl">Input Group</h2>
          <div className="mt-2 grid grid-flow-row grid-cols-3 gap-2">
            <div className="col-span-full md:col-auto">
              <div className="relative flex flex-wrap items-stretch">
                <InputSelect
                  name="input-select-default"
                  option={testSelectOption}
                  placeholder="Default"
                />
                <InputField
                  name="input-default"
                  placeholder="Default"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl">
            Playground&nbsp;
            <code className="text-sm text-[#9e01ff]">CHANGE ON CODE FILE</code>
          </h2>
          <div className="mt-2">
            {/* CODE HERE */}
            <div className="relative flex flex-wrap gap-1">
              <InputSelect
                name="input-select-default"
                option={testSelectOptionAnother}
                placeholder="Filter"
              />
              <InputField name="input-default" placeholder="Cari" readOnly />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TestInputPage;
