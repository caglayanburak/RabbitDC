import * as React from 'react';
import {useId} from '@uifabric/react-hooks';
import {TextField} from 'office-ui-fabric-react/lib/TextField';
import {DefaultButton} from 'office-ui-fabric-react';
import {Label} from 'office-ui-fabric-react/lib/Label';
import {
  getTheme,
  mergeStyleSets,
  FontWeights,
  Modal,
  IconButton,
  IIconProps,
} from 'office-ui-fabric-react';
import {useState} from 'react';

const cancelIcon: IIconProps = {iconName: 'Cancel'};

type props = {
  modalOpen: boolean,
  openModal: (state: any) => void,
  moveQueue: (payload: any) => boolean,
  queueName: string
}

export const MoveModal = ({modalOpen, openModal, queueName, moveQueue}: props) => {
  const [toQueueName, setToQueueName] = useState("");
  // Use useId() to ensure that the IDs are unique on the page.
  // (It's also okay to use plain strings and manually ensure uniqueness.)
  const titleId = useId('title');

  return (
    <div>
      <Modal
        titleAriaId={titleId}
        isOpen={modalOpen}
        onDismiss={() => {
          openModal(false)
        }}
        isBlocking={false}
        containerClassName={contentStyles.container}
      >
        <div className={contentStyles.header}>
          <span id={titleId}>Move Queue</span>
          <IconButton
            styles={iconButtonStyles}
            iconProps={cancelIcon}
            ariaLabel="Close popup modal"
            onClick={() => {
              openModal(false)
            }}
          />
        </div>
        <div className="ms-Grid " dir="ltr">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
              From Queue: <Label style={{color: 'green'}}> {queueName}</Label>
              <TextField label="Destination Queue" value={toQueueName} onChange={(e) => {
                alert(e.target.value);
                setToQueueName(e.target.value)
              }}
                         defaultValue="if text has error keyword ,write original queue name"/>
              <DefaultButton
                style={{color: 'green', marginTop: 15, marginBottom: 15, border: '1px solid green', float: 'right'}}
                onClick={() => {
                  moveQueue({fromQueueName:queueName,toQueueName: toQueueName})
                }}>Move
                Messages</DefaultButton>

            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const theme = getTheme();
const contentStyles = mergeStyleSets({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'stretch',
    width: '45%'
  },
  header: [
    // tslint:disable-next-line:deprecation
    theme.fonts.xLargePlus,
    {
      flex: '1 1 auto',
      borderTop: `4px solid ${theme.palette.themePrimary}`,
      color: theme.palette.neutralPrimary,
      display: 'flex',
      alignItems: 'center',
      fontWeight: FontWeights.semibold,
      padding: '12px 12px 14px 24px',
    },
  ],
  body: {
    flex: '8 8 auto',
    padding: '0 24px 24px 24px',
    overflowY: 'hidden',
    selectors: {
      p: {margin: '14px 0'},
      'p:first-child': {marginTop: 0},
      'p:last-child': {marginBottom: 0},
    },
  },
});
const iconButtonStyles = {
  root: {
    color: theme.palette.neutralPrimary,
    marginLeft: 'auto',
    marginTop: '4px',
    marginRight: '2px',
  },
  rootHovered: {
    color: theme.palette.neutralDark,
  },
};
