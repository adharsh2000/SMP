import * as React from "react";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import DialogComponent from "~/components/ui/dialoug";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export function Welcome() {
  const [open, setOpen] = React.useState(false);

  return (
    <main className="flex items-center justify-center pt-16 pb-4 bg-gray-600">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <h1 className="text-3xl font-bold text-primary font-milk">
            Welcome to your new React Router app!
          </h1>
          <div className="flex flex-col items-center justify-center min-h-svh">
           {/* <Dialog/> */}
           <DialogComponent/>
          </div>
        </div>
      </div>
    </main>
  );
}
