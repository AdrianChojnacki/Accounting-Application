import { forwardRef, ReactElement, Ref } from "react";
import { useTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { SubmitButton } from "..";
import { IDeletePopupProps } from ".";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeletePopup = ({
  text,
  popupState,
  hidePopup,
  deleteClick,
}: IDeletePopupProps) => {
  const { t } = useTranslation();

  return (
    <Dialog
      open={popupState}
      TransitionComponent={Transition}
      keepMounted
      onClose={hidePopup}
      aria-describedby="alert-dialog-slide-description"
      BackdropProps={{
        style: { backgroundColor: "rgba(0, 0, 0, .075)" },
      }}
      PaperProps={{
        style: { boxShadow: "none" },
      }}
    >
      <DialogTitle>{text}</DialogTitle>
      <DialogActions>
        <SubmitButton text={t("yes")} onClick={deleteClick} />
        <SubmitButton text={t("no")} onClick={hidePopup} />
      </DialogActions>
    </Dialog>
  );
};

export { DeletePopup };
