import { forwardRef, ReactElement, Ref, useContext } from "react";
import { useTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { SuccessPopupContext, SuccessPopupHideContext } from "../../providers";
import { SubmitButton } from "..";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SuccessPopup = ({ text }: { text: string }) => {
  const popupState = useContext(SuccessPopupContext);
  const hideSuccessPopup = useContext(SuccessPopupHideContext);
  const { t } = useTranslation();

  return (
    <Dialog
      open={popupState}
      TransitionComponent={Transition}
      keepMounted
      onClose={hideSuccessPopup}
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{
        style: { boxShadow: "none" },
      }}
    >
      <DialogTitle>{text}</DialogTitle>
      <DialogActions>
        <SubmitButton text={t("ok")} onClick={hideSuccessPopup} />
      </DialogActions>
    </Dialog>
  );
};

export { SuccessPopup };
