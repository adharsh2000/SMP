import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default function DialogComponent() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="px-4 py-2 bg-dark-600 text-white rounded-md hover:bg-blue-700 transition">
          Open Dialog
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
          <div className="flex flex-col gap-4">
            <img
              src="https://img.freepik.com/free-vector/milk-products-template_1284-14600.jpg?semt=ais_hybrid&w=740"
              alt="Dialog Feature"
              className="w-full h-48 object-contain rounded-md"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center">
              Explore Our New Feature
            </h2>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 text-center">
              A Revolutionary Tool for Productivity
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This feature is designed to streamline your workflow, enhance collaboration, and provide unparalleled efficiency in your daily tasks.
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                wait().then(() => setOpen(false));
              }}
              className="flex flex-col gap-4"
            >    
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}