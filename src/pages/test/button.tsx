import React from "react";
import Head from "next/head";

import Button from "@/components/ui/Button";
import RadioButtonCheckedIcon from "@/components/ui/Icons/radio-button-checked-icon";

function TestButtonPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Test Button</title>
        <meta name="description" content="Test Button" />
      </Head>

      <div className="p-2">
        <div className="mb-2">
          <h2 className="text-2xl">Button</h2>
          <div className="mt-2 grid grid-flow-row grid-cols-3 gap-2">
            <div className="col-span-full md:col-auto">
              <Button>Button</Button>
            </div>
            <div className="col-span-full md:col-auto">
              <Button outlined>Outlined</Button>
            </div>
            <div className="col-span-full md:col-auto">
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </div>
        <div className="mb-2">
          <h2 className="text-2xl">Button Size</h2>
          <div className="mt-2 grid grid-flow-row grid-cols-3 gap-2">
            <div className="col-span-full md:col-auto">
              <Button size="small">Small</Button>
            </div>
            <div className="col-span-full md:col-auto">
              <Button>Default</Button>
            </div>
            <div className="col-span-full md:col-auto">
              <Button size="large">Large</Button>
            </div>
          </div>
        </div>
        <div className="mb-2">
          <h2 className="text-2xl">Button Color</h2>
          <div className="mt-2 grid grid-flow-row grid-cols-3 gap-2">
            <div className="col-span-full md:col-auto">
              <Button>Primary</Button>
            </div>
            <div className="col-span-full md:col-auto">
              <Button color="red">Red</Button>
            </div>
            <div className="col-span-full md:col-auto">
              <Button color="light">Light</Button>
            </div>
          </div>
        </div>
        <div className="mb-2">
          <h2 className="text-2xl">Button Icon</h2>
          <div className="mt-2 grid grid-flow-row grid-cols-3 gap-2">
            <div className="col-span-full md:col-auto">
              <Button size="small" iconLeft={<RadioButtonCheckedIcon />}>
                Small
              </Button>
            </div>
            <div className="col-span-full md:col-auto">
              <Button
                iconLeft={<RadioButtonCheckedIcon />}
                iconRight={<RadioButtonCheckedIcon />}
              >
                Default
              </Button>
            </div>
            <div className="col-span-full md:col-auto">
              <Button size="large" iconRight={<RadioButtonCheckedIcon />}>
                Large
              </Button>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl">
            Playground&nbsp;<code className="text-sm">CHANGE ON CODE FILE</code>
          </h2>
          <div className="mt-2 grid grid-flow-row grid-cols-3 gap-2">
            {/* CODE HERE */}
            {/* <div className="col-span-full md:col-auto">
              <Button color="light" disabled>
                Button Test
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TestButtonPage;
