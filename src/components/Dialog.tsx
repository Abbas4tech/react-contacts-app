import React from "react";

const Dialog = ({
  open,
  heading,
  content,
  action,
  type,
  onAction,
  onClose,
  onCancel,
}: {
  open: boolean;
  heading: string;
  content: React.ReactNode;
  action: string;
  type: "info" | "warning" | "error" | "success";
  onAction?: () => void;
  onClose?: () => void;
  onCancel?: () => void;
}) => {
  return (
    <>
      <input
        type="checkbox"
        id="my-modal"
        checked={open}
        className="modal-toggle"
        readOnly
      />
      <div className="modal">
        <div className="modal-box">
          <div className="sm:flex sm:items-start w-full">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 className="text-lg font-bold">{heading}</h3>
              <p className="py-4">{content}</p>
            </div>
          </div>
          <div className={action === "none" ? "hidden" : "modal-action"}>
            {action.toLowerCase() !== "close" && (
              <label
                htmlFor="my-modal"
                className="btn btn-ghost"
                onClick={() => onCancel?.()}
              >
                Cancel
              </label>
            )}
            <label
              htmlFor="my-modal"
              className={`btn cursor-pointer inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white ${
                type === "info"
                  ? "bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500"
                  : type === "warning"
                  ? "bg-orange-600  hover:bg-orange-700 focus:ring-orange-500"
                  : type === "success"
                  ? "bg-green-600 hover:bg-green-700 focus:ring-green-500"
                  : "bg-red-600  hover:bg-red-700 focus:ring-red-500"
              } border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm`}
              onClick={() => onAction?.()}
            >
              {action}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialog;
