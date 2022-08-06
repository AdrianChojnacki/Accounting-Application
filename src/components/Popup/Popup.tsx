import { forwardRef, ReactElement, Ref, useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { SubmitButton } from "..";
import { PopupContext, PopupHideContext } from "../../providers";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Popup = ({ text }: { text: string }) => {
  const popupState = useContext(PopupContext);
  const hidePopup = useContext(PopupHideContext);

  return (
    <>
      <Dialog
        open={popupState}
        TransitionComponent={Transition}
        keepMounted
        onClose={hidePopup}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{text}</DialogTitle>
        <DialogActions>
          <SubmitButton text="OK" onClick={hidePopup} />
        </DialogActions>
      </Dialog>
    </>
  );
};

export { Popup };
