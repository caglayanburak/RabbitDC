import * as React from 'react';
import {Dialog, DialogType, DialogFooter} from 'office-ui-fabric-react/lib/Dialog';
import {PrimaryButton, DefaultButton} from 'office-ui-fabric-react/lib/Button';
import {useId} from '@uifabric/react-hooks';

const dialogStyles = {main: {maxWidth: 450}};


type props = {
  dialogState: boolean,
  toggleDialog: (state: any) => void,
  queueName: string,
  dialogMessage: any
}

export const DialogBasicExample = ({dialogState, toggleDialog, queueName, dialogMessage}: props) => {
  const labelId: string = useId('dialogLabel');
  const subTextId: string = useId('subTextLabel');

  const modalProps = React.useMemo(
    () => ({
      titleAriaId: labelId,
      subtitleAriaId: subTextId,
      isBlocking: false,
      styles: dialogStyles
    }),
    [],
  );

  const dialogContentProps = {
    type: DialogType.normal,
    title: dialogMessage.title,
    closeButtonAriaLabel: 'Close',
    subText: dialogMessage.description,
  };

  return (
    <>
      <Dialog
        hidden={!dialogState}
        // onDismiss={toggleHideDialog}
        dialogContentProps={dialogContentProps}
        modalProps={modalProps}
      >
        <DialogFooter>
          <PrimaryButton onClick={() => {
            toggleDialog(false)
          }} text="Yes"/>
          <DefaultButton onClick={() => {
            toggleDialog(false)
          }} text="No"/>
        </DialogFooter>
      </Dialog>
    </>
  );
};
