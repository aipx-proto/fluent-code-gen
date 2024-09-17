# Dialog

```jsx
import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
} from "@fluentui/react-components";

export const Default = () => {
  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            exercitationem cumque repellendus eaque est dolor eius expedita
            nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates
            in natus iure cumque eaque?
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Close</Button>
            </DialogTrigger>
            <Button appearance="primary">Do Something</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
```

### Default

```jsx
import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
} from "@fluentui/react-components";

export const Default = () => {
  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            exercitationem cumque repellendus eaque est dolor eius expedita
            nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates
            in natus iure cumque eaque?
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Close</Button>
            </DialogTrigger>
            <Button appearance="primary">Do Something</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
```

### Non Modal

A `non-modal` Dialog by default presents no `backdrop`, allowing elements outside of the Dialog to be interacted with.

`DialogTitle` compound component will present by default a `closeButton`.

> Note: if an element outside of the dialog is focused then it will not be possible to close the dialog with the `Escape` key.

```jsx
import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogContent,
  Button,
} from "@fluentui/react-components";

export const NonModal = () => {
  return (
    <Dialog modalType="non-modal">
      <DialogTrigger disableButtonEnhancement>
        <Button>Open non-modal dialog</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Non-modal dialog title</DialogTitle>
          <DialogContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            explicabo repudiandae impedit doloribus laborum quidem maxime
            dolores perspiciatis non ipsam, nostrum commodi quis autem sequi,
            incidunt cum? Consequuntur, repellendus nostrum?
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
```

### Alert

An `alert` Dialog is a modal dialog that interrupts the user's workflow to communicate an important message and acquire a response. Examples include action confirmation prompts and error message confirmations. The `alert` Dialog role enables assistive technologies and browsers to distinguish alert dialogs from other dialogs so they have the option of giving alert dialogs special treatment, such as playing a system alert sound.

By default clicking on `backdrop` will not dismiss an `alert` Dialog.

```jsx
import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogContent,
  DialogBody,
  DialogActions,
  Button,
} from "@fluentui/react-components";

export const Alert = () => {
  return (
    <Dialog modalType="alert">
      <DialogTrigger disableButtonEnhancement>
        <Button>Open Alert dialog</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Alert dialog title</DialogTitle>
          <DialogContent>
            This dialog cannot be dismissed by clicking on the backdrop nor by
            pressing Escape. Close button should be pressed to dismiss this
            Alert
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Close</Button>
            </DialogTrigger>
            <Button appearance="primary">Do Something</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
```

### Scrolling Long Content

By default `DialogContent` should grow until it fits viewport size, overflowed content will be scrollable

```jsx
import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogContent,
  DialogActions,
  Button,
} from "@fluentui/react-components";

export const ScrollingLongContent = () => {
  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
              pretium fusce id velit ut tortor. Leo vel fringilla est
              ullamcorper. Eget est lorem ipsum dolor sit amet consectetur
              adipiscing elit. In mollis nunc sed id semper risus in hendrerit
              gravida. Ullamcorper sit amet risus nullam eget felis eget. Dolor
              sed viverra ipsum nunc aliquet bibendum. Facilisi morbi tempus
              iaculis urna id volutpat. Porta non pulvinar neque laoreet
              suspendisse. Nunc id cursus metus aliquam eleifend mi in. A
              iaculis at erat pellentesque adipiscing commodo. Proin nibh nisl
              condimentum id. In hac habitasse platea dictumst vestibulum
              rhoncus est. Non tellus orci ac auctor augue mauris augue neque.
              Enim nulla aliquet porttitor lacus luctus accumsan tortor.
              Nascetur ridiculus mus mauris vitae ultricies leo integer.
              Ullamcorper eget nulla facilisi etiam dignissim. Leo in vitae
              turpis massa sed elementum tempus egestas sed.
            </p>
            <p>
              Ut enim blandit volutpat maecenas volutpat. Venenatis urna cursus
              eget nunc scelerisque viverra mauris. Neque aliquam vestibulum
              morbi blandit. Porttitor eget dolor morbi non. Nisi quis eleifend
              quam adipiscing vitae. Aliquam ultrices sagittis orci a
              scelerisque purus semper. Interdum varius sit amet mattis
              vulputate enim nulla aliquet. Ut sem viverra aliquet eget sit amet
              tellus cras. Sit amet tellus cras adipiscing enim eu turpis
              egestas. Amet cursus sit amet dictum sit amet justo donec enim.
              Neque gravida in fermentum et sollicitudin ac. Arcu cursus euismod
              quis viverra nibh cras pulvinar mattis nunc. Ultrices eros in
              cursus turpis massa tincidunt dui. Nisl rhoncus mattis rhoncus
              urna neque viverra justo. Odio pellentesque diam volutpat commodo
              sed egestas. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper.
              Ipsum nunc aliquet bibendum enim. Faucibus ornare suspendisse sed
              nisi lacus sed. Sapien nec sagittis aliquam malesuada bibendum
              arcu vitae elementum. Metus vulputate eu scelerisque felis
              imperdiet.
            </p>
            <p>
              Consequat interdum varius sit amet mattis vulputate enim. Amet
              cursus sit amet dictum sit amet justo. Eget aliquet nibh praesent
              tristique magna sit. Ut consequat semper viverra nam libero justo.
              Pharetra massa massa ultricies mi. Sem viverra aliquet eget sit
              amet. Pulvinar mattis nunc sed blandit libero volutpat sed.
              Pharetra diam sit amet nisl suscipit adipiscing bibendum.
              Consectetur adipiscing elit ut aliquam. Volutpat diam ut venenatis
              tellus in metus vulputate. Scelerisque in dictum non consectetur a
              erat. Venenatis lectus magna fringilla urna porttitor rhoncus.
              Vitae congue mauris rhoncus aenean vel elit. Neque laoreet
              suspendisse interdum consectetur. Ultrices gravida dictum fusce ut
              placerat orci. Bibendum ut tristique et egestas quis ipsum
              suspendisse. Mattis rhoncus urna neque viverra justo nec ultrices
              dui. Elit duis tristique sollicitudin nibh sit amet.
            </p>
            <p>
              At risus viverra adipiscing at. Interdum posuere lorem ipsum dolor
              sit amet consectetur adipiscing elit. Nunc vel risus commodo
              viverra maecenas. Sit amet est placerat in egestas erat imperdiet
              sed euismod. Turpis egestas maecenas pharetra convallis posuere.
              Egestas tellus rutrum tellus pellentesque eu tincidunt tortor
              aliquam. Dolor sit amet consectetur adipiscing elit. Aliquam purus
              sit amet luctus venenatis lectus magna fringilla. Scelerisque
              fermentum dui faucibus in ornare quam viverra. Egestas maecenas
              pharetra convallis posuere morbi leo urna. A diam sollicitudin
              tempor id eu nisl nunc. Lectus sit amet est placerat.
            </p>
            <p>
              Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare
              massa eget. At tellus at urna condimentum mattis pellentesque id
              nibh. Dui faucibus in ornare quam. Tincidunt id aliquet risus
              feugiat in ante metus dictum. Adipiscing commodo elit at imperdiet
              dui. Dolor sed viverra ipsum nunc. Sodales neque sodales ut etiam
              sit amet nisl. Hendrerit dolor magna eget est lorem ipsum dolor
              sit amet. Mattis molestie a iaculis at erat pellentesque
              adipiscing. Adipiscing elit duis tristique sollicitudin nibh sit
              amet commodo nulla. Fringilla urna porttitor rhoncus dolor purus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
              pretium fusce id velit ut tortor. Leo vel fringilla est
              ullamcorper. Eget est lorem ipsum dolor sit amet consectetur
              adipiscing elit. In mollis nunc sed id semper risus in hendrerit
              gravida. Ullamcorper sit amet risus nullam eget felis eget. Dolor
              sed viverra ipsum nunc aliquet bibendum. Facilisi morbi tempus
              iaculis urna id volutpat. Porta non pulvinar neque laoreet
              suspendisse. Nunc id cursus metus aliquam eleifend mi in. A
              iaculis at erat pellentesque adipiscing commodo. Proin nibh nisl
              condimentum id. In hac habitasse platea dictumst vestibulum
              rhoncus est. Non tellus orci ac auctor augue mauris augue neque.
              Enim nulla aliquet porttitor lacus luctus accumsan tortor.
              Nascetur ridiculus mus mauris vitae ultricies leo integer.
              Ullamcorper eget nulla facilisi etiam dignissim. Leo in vitae
              turpis massa sed elementum tempus egestas sed.
            </p>
            <p>
              Ut enim blandit volutpat maecenas volutpat. Venenatis urna cursus
              eget nunc scelerisque viverra mauris. Neque aliquam vestibulum
              morbi blandit. Porttitor eget dolor morbi non. Nisi quis eleifend
              quam adipiscing vitae. Aliquam ultrices sagittis orci a
              scelerisque purus semper. Interdum varius sit amet mattis
              vulputate enim nulla aliquet. Ut sem viverra aliquet eget sit amet
              tellus cras. Sit amet tellus cras adipiscing enim eu turpis
              egestas. Amet cursus sit amet dictum sit amet justo donec enim.
              Neque gravida in fermentum et sollicitudin ac. Arcu cursus euismod
              quis viverra nibh cras pulvinar mattis nunc. Ultrices eros in
              cursus turpis massa tincidunt dui. Nisl rhoncus mattis rhoncus
              urna neque viverra justo. Odio pellentesque diam volutpat commodo
              sed egestas. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper.
              Ipsum nunc aliquet bibendum enim. Faucibus ornare suspendisse sed
              nisi lacus sed. Sapien nec sagittis aliquam malesuada bibendum
              arcu vitae elementum. Metus vulputate eu scelerisque felis
              imperdiet.
            </p>
            <p>
              Consequat interdum varius sit amet mattis vulputate enim. Amet
              cursus sit amet dictum sit amet justo. Eget aliquet nibh praesent
              tristique magna sit. Ut consequat semper viverra nam libero justo.
              Pharetra massa massa ultricies mi. Sem viverra aliquet eget sit
              amet. Pulvinar mattis nunc sed blandit libero volutpat sed.
              Pharetra diam sit amet nisl suscipit adipiscing bibendum.
              Consectetur adipiscing elit ut aliquam. Volutpat diam ut venenatis
              tellus in metus vulputate. Scelerisque in dictum non consectetur a
              erat. Venenatis lectus magna fringilla urna porttitor rhoncus.
              Vitae congue mauris rhoncus aenean vel elit. Neque laoreet
              suspendisse interdum consectetur. Ultrices gravida dictum fusce ut
              placerat orci. Bibendum ut tristique et egestas quis ipsum
              suspendisse. Mattis rhoncus urna neque viverra justo nec ultrices
              dui. Elit duis tristique sollicitudin nibh sit amet.
            </p>
            <p>
              At risus viverra adipiscing at. Interdum posuere lorem ipsum dolor
              sit amet consectetur adipiscing elit. Nunc vel risus commodo
              viverra maecenas. Sit amet est placerat in egestas erat imperdiet
              sed euismod. Turpis egestas maecenas pharetra convallis posuere.
              Egestas tellus rutrum tellus pellentesque eu tincidunt tortor
              aliquam. Dolor sit amet consectetur adipiscing elit. Aliquam purus
              sit amet luctus venenatis lectus magna fringilla. Scelerisque
              fermentum dui faucibus in ornare quam viverra. Egestas maecenas
              pharetra convallis posuere morbi leo urna. A diam sollicitudin
              tempor id eu nisl nunc. Lectus sit amet est placerat.
            </p>
            <p>
              Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare
              massa eget. At tellus at urna condimentum mattis pellentesque id
              nibh. Dui faucibus in ornare quam. Tincidunt id aliquet risus
              feugiat in ante metus dictum. Adipiscing commodo elit at imperdiet
              dui. Dolor sed viverra ipsum nunc. Sodales neque sodales ut etiam
              sit amet nisl. Hendrerit dolor magna eget est lorem ipsum dolor
              sit amet. Mattis molestie a iaculis at erat pellentesque
              adipiscing. Adipiscing elit duis tristique sollicitudin nibh sit
              amet commodo nulla. Fringilla urna porttitor rhoncus dolor purus.
            </p>
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Close</Button>
            </DialogTrigger>
            <Button appearance="primary">Do Something</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
```

### Actions

Dialogs should be used for providing the user with quick prompt options where decisions should be made quickly. They should be used for actions that are not reversible, such as deleting an item.

`DialogActions` should be used to provide the user with a set of actions to choose from. The actions should be clear and concise, and should be used to guide the user to the next step in the process.

```jsx
import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogContent,
  DialogBody,
  DialogActions,
  Button,
  Checkbox,
  CheckboxOnChangeData,
} from "@fluentui/react-components";

export const Actions = () => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement>,
    data: CheckboxOnChangeData
  ) => {
    setChecked(Boolean(data.checked));
  };
  return (
    <Dialog modalType="non-modal">
      <DialogTrigger disableButtonEnhancement>
        <Button>Open campaign dialog</Button>
      </DialogTrigger>
      <DialogSurface aria-describedby={undefined}>
        <DialogBody>
          <DialogTitle>Delete this campaign?</DialogTitle>
          <DialogContent>
            <p>
              You're about to delete the campaign group "Campaign name that goes
              up to two lines". This will also delete all associated campaign
              resources, including the overview page, files, publications,
              conversations, and so forth. Please back up any content you need
              before proceeding.
            </p>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              label="Yes, delete this campaign and all its associated resources"
            />
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button disabled={!checked} appearance="primary">
                Delete
              </Button>
            </DialogTrigger>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Cancel</Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
```

### Fluid Actions

Use the `fluid` prop on the `DialogActions` component so that it spans the entire width of the dialog. This prop can be useful for having large number of actions.

> A `Dialog` should have no more than **two** actions.

```jsx
import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
} from "@fluentui/react-components";

export const FluidActions = () => {
  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            exercitationem cumque repellendus eaque est dolor eius expedita
            nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates
            in natus iure cumque eaque?
          </DialogContent>
          <DialogActions fluid>
            <Button appearance="secondary">Something Else</Button>
            <Button appearance="secondary">Something Else</Button>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Close</Button>
            </DialogTrigger>
            <Button appearance="primary">Do Something</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
```

### No Focusable Element

A `Dialog` **should** always have at least one focusable element. Some accessibility issues might happen if no focusable element is provided, like this one caught in Talkback.

In the case when there is no focusable element inside a `Dialog` the only way to close the `Dialog` would be clicking on the `backdrop`.

> A common scenario for no focusable elements on a dialog is lazy loaded content, where the content (with focusable elements) is added after the Dialog is mounted. In that case, it is recommended to manually focus on the desired focusable element after the content is loaded.

```jsx
import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogContent,
  DialogTitle,
  DialogBody,
  Button,
} from "@fluentui/react-components";

export const NoFocusableElement = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger disableButtonEnhancement>
          <Button>Open modal dialog</Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogContent>
              <p>⛔️ A Dialog without focusable elements is not recommended!</p>
              <p>✅ Escape key works</p>
              <p>
                ✅ Backdrop click still works to ensure this modal can be closed
              </p>
            </DialogContent>
          </DialogBody>
        </DialogSurface>
      </Dialog>
      <Dialog modalType="non-modal">
        <DialogTrigger disableButtonEnhancement>
          <Button>Open non-modal dialog</Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle action={null}>Dialog Title</DialogTitle>
            <DialogContent>
              <p>
                ⛔️ A modal Dialog without focusable elements is not
                recommended!
              </p>
              <p>✅ Escape key works</p>
            </DialogContent>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </>
  );
};
```

### Controlling Open And Close

The opening and close of the `Dialog` can be controlled with your own state. The `onOpenChange` callback will provide the hints for the state and triggers based on the appropriate event.

```jsx
import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogContent,
  DialogBody,
  DialogActions,
  Button,
} from "@fluentui/react-components";

export const ControllingOpenAndClose = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={(event, data) => setOpen(data.open)}>
      <DialogTrigger disableButtonEnhancement>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            exercitationem cumque repellendus eaque est dolor eius expedita
            nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates
            in natus iure cumque eaque?
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Close</Button>
            </DialogTrigger>
            <Button appearance="primary">Do Something</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
```

### Change Focus

Changing the default focused element can be done in an effect

```jsx
import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogContent,
  DialogBody,
  DialogActions,
  Button,
} from "@fluentui/react-components";

export const ChangeFocus = () => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (open && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [open]);
  return (
    <Dialog open={open} onOpenChange={(event, data) => setOpen(data.open)}>
      <DialogTrigger disableButtonEnhancement>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogContent>
            This dialog focus on the second button instead of the first
          </DialogContent>
          <DialogActions position="start">
            <Button appearance="outline">Third Action</Button>
          </DialogActions>
          <DialogActions position="end">
            <DialogTrigger disableButtonEnhancement>
              <Button ref={buttonRef} appearance="secondary">
                Close
              </Button>
            </DialogTrigger>
            <Button appearance="primary">Do Something</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
```

### Trigger Outside Dialog

When using a `Dialog` without a `DialogTrigger` (or when using a `DialogTrigger` outside of a `Dialog`), it becomes your responsibility to control some of the dialog's behavior.

1.  You must make sure that the `open` state is set accordingly to the dialog's visibility (mostly this means to properly react to the events provided by `onOpenChange` callback on `Dialog` component).
2.  You must make sure that focus is properly restored once the dialog is closed (this can be achieved by using the `useRestoreFocusTarget` hook, or by manually invoking `.focus()` on the target element).

The example bellow showcases both explicit responsibilities:

```jsx
import * as React from "react";
import {
  Dialog,
  DialogSurface,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogTrigger,
  DialogBody,
  Button,
  useRestoreFocusTarget,
} from "@fluentui/react-components";

export const TriggerOutsideDialog = () => {
  const [open, setOpen] = React.useState(false);
  const restoreFocusTargetAttribute = useRestoreFocusTarget();

  return (
    <>
      <Button
        // restoreFocusTargetAttribute ensures that focus is restored to this button when the dialog closes
        {...restoreFocusTargetAttribute}
        onClick={() => {
          // it is the user responsibility to open the dialog
          setOpen(true);
        }}
      >
        Open Dialog
      </Button>

      <Dialog
        // this controls the dialog open state
        open={open}
        onOpenChange={(event, data) => {
          // it is the users responsibility to react accordingly to the open state change
          setOpen(data.open);
        }}
      >
        <DialogSurface>
          <DialogBody>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              exercitationem cumque repellendus eaque est dolor eius expedita
              nulla ullam? Tenetur reprehenderit aut voluptatum impedit
              voluptates in natus iure cumque eaque?
            </DialogContent>

            <DialogActions>
              {/* DialogTrigger inside of a Dialog still works properly */}
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary">Close</Button>
              </DialogTrigger>
              <Button appearance="primary">Do Something</Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </>
  );
};
```

### Custom Trigger

Native HTML elements and Fluent components have first class support as children of `DialogTrigger`, so they will be injected automatically with the correct props for interactions and accessibility attributes.

It is possible to use your own custom React component as a child of `DialogTrigger`. These components should use ref forwarding with React.forwardRef

`DialogTrigger` provides proper aria attributes for a modal trigger.

```jsx
import * as React from "react";
import {
  Button,
  Dialog,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogContent,
  DialogActions,
  DialogTrigger,
} from "@fluentui/react-components";
import type { DialogTriggerChildProps } from "@fluentui/react-components";

const CustomDialogTrigger = React.forwardRef<
  HTMLButtonElement,
  DialogTriggerChildProps
>((props, ref) => {
  return (
    <Button {...props} ref={ref}>
      Custom Trigger
    </Button>
  );
});

export const CustomTrigger = () => {
  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <CustomDialogTrigger />
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            exercitationem cumque repellendus eaque est dolor eius expedita
            nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates
            in natus iure cumque eaque?
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Close</Button>
            </DialogTrigger>
            <Button appearance="primary">Do Something</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
```

### With Form

Having a `form` inside the `Dialog` its quite simple, you simply add a `<form>` element between `DialogSurface` and `DialogBody` to ensure all the content between them are properly wrapped inside the formulary. This allows a button inside `DialogActions` to be properly used as submission button.

> Keep in mind that controlling the `open` state of the `Dialog` might be ideal in this scenario, since validation and submission are possibly synchronous activities. For example, closing the `Dialog` only after the submission is successful would require control of the `open` state, to properly set `open` to `false` only once the submission has succeeded.

```jsx
import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogContent,
  DialogBody,
  DialogActions,
  Button,
  Input,
  Label,
  makeStyles,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  content: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
  },
});

export const WithForm = () => {
  const styles = useStyles();
  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    alert("form submitted!");
  };
  return (
    <Dialog modalType="non-modal">
      <DialogTrigger disableButtonEnhancement>
        <Button>Open formulary dialog</Button>
      </DialogTrigger>
      <DialogSurface aria-describedby={undefined}>
        <form onSubmit={handleSubmit}>
          <DialogBody>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogContent className={styles.content}>
              <Label required htmlFor={"email-input"}>
                Email input
              </Label>
              <Input required type="email" id={"email-input"} />
              <Label required htmlFor={"password-input"}>
                Password input
              </Label>
              <Input required type="password" id={"password-input"} />
            </DialogContent>
            <DialogActions>
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary">Close</Button>
              </DialogTrigger>
              <Button type="submit" appearance="primary">
                Submit
              </Button>
            </DialogActions>
          </DialogBody>
        </form>
      </DialogSurface>
    </Dialog>
  );
};
```

### Title Custom Action

By default if `Dialog` has `modalType='non-modal'` a button with a close icon is provided to close the dialog as `action` slot.

This slot can be customized to add a different kind of action, that it'll be available in any kind of `Dialog`, ignoring the `modalType` property, here's an example replacing the simple close icon with a Fluent UI Button using the same icon.

```jsx
import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogContent,
  Button,
} from "@fluentui/react-components";

import { Dismiss24Regular } from "@fluentui/react-icons";

export const TitleCustomAction = () => {
  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle
            action={
              <DialogTrigger action="close">
                <Button
                  appearance="subtle"
                  aria-label="close"
                  icon={<Dismiss24Regular />}
                />
              </DialogTrigger>
            }
          >
            Dialog title
          </DialogTitle>
          <DialogContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            explicabo repudiandae impedit doloribus laborum quidem maxime
            dolores perspiciatis non ipsam, nostrum commodi quis autem sequi,
            incidunt cum? Consequuntur, repellendus nostrum?
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
```

### Title No Action

As any other slot, `action={null}` can be provided to opt out of rendering any action

```jsx
import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogBody,
  Button,
} from "@fluentui/react-components";

export const TitleNoAction = () => {
  return (
    <Dialog modalType="non-modal">
      <DialogTrigger disableButtonEnhancement>
        <Button>Open non-modal dialog</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle action={null}>
            Non-modal dialog title without an action
          </DialogTitle>
          <DialogContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            explicabo repudiandae impedit doloribus laborum quidem maxime
            dolores perspiciatis non ipsam, nostrum commodi quis autem sequi,
            incidunt cum? Consequuntur, repellendus nostrum?
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="primary">Close</Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
```