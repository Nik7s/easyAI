import { Button } from "./ui/button";
import { Note } from "@prisma/client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "./ui/dialog";
import { DialogProps, DialogTitle } from "@radix-ui/react-dialog";

type confirmDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
} & DialogProps;
export default function ConfirmDialog({
  open,
  setOpen,
  children,
}: confirmDialogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>❌Delete note</DialogTitle>
          <DialogDescription>confirm to delete a note</DialogDescription>
        </DialogHeader>
        {children}
        <DialogClose />
      </DialogContent>
    </Dialog>
  );
}
