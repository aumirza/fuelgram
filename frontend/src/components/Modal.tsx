import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

function Modal({
  title,
  trigger,
  children,
  action,
}: {
  title: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
        {action ? <DialogFooter>{action}</DialogFooter> : null}
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
