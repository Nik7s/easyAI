import { Button } from "./ui/button";
import { Note } from "@prisma/client";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "./ui/dialog";
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>🥹❌Confirm</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
